import { News, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
  hat: string;
  title: string;
  text: string;
  image: string;
  link: string;
  isActive: boolean;
  categoryIds?: string[];
  categoriesToRemove?: string[];
}

export default class UpdateNewsService {
  public async execute({
    id,
    hat,
    title,
    text,
    image,
    link,
    isActive,
    categoryIds,
    categoriesToRemove,
  }: IRequest): Promise<News> {
    const news = await prisma.news.findUnique({
      where: {
        id: id,
      },
      include: {
        categories: true,
      },
    });

    if (!news) {
      throw new AppError('Notícia não encontrada');
    }

    if (categoryIds) {
      const existingCategoryIds = news.categories.map(
        (category: any) => category.id,
      );
      const duplicateCategories = categoryIds.filter((categoryId): any =>
        existingCategoryIds.includes(categoryId),
      );
    }

    if (categoriesToRemove) {
      const allCategoriesExist = categoriesToRemove.every((categoryId) =>
        news.categories.some((category): any => category.id === categoryId),
      );

      if (!allCategoriesExist) {
        throw new AppError('Está categoria não existe nesta notícia.');
      }

      const categoryIdsToRemove = categoriesToRemove;

      await prisma.news.update({
        where: {
          id: id,
        },
        data: {
          categories: {
            disconnect: categoryIdsToRemove.map((categoryId): any => ({
              id: categoryId,
            })),
          },
        },
      });
    }

    const updatedNews = await prisma.news.update({
      where: {
        id: id,
      },
      data: {
        hat: hat,
        title: title,
        text: text,
        image: image,
        link: link,
        isActive: isActive,
        categories: {
          connect: categoryIds?.map((categoryId) => ({ id: categoryId })) || [],
        },
      },
    });

    return updatedNews;
  }
}
