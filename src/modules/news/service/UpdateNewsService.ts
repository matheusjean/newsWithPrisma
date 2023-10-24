import { Category, News, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
  hat: string;
  title: string;
  text: string;
  image: string;
  link: string;
  author: string;
  isActive: boolean;
  isHighlighted: number;
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
    author,
    isActive,
    isHighlighted,
    categoryIds,
    categoriesToRemove,
  }: IRequest): Promise<News> {
    async function clearHighlightedNewsExceptCurrent() {
      await prisma.news.updateMany({
        where: {
          NOT: {
            id: id,
          },
          isHighlighted: isHighlighted,
        },
        data: {
          isHighlighted: 0,
        },
      });
    }

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
      const allCategoriesExist = categoriesToRemove.every(
        (categoryId: string) =>
          news.categories.some(
            (category: Category) => category.id === categoryId,
          ),
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

    await clearHighlightedNewsExceptCurrent();

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
        isHighlighted: isHighlighted,
        categories: {
          connect: categoryIds?.map((categoryId) => ({ id: categoryId })) || [],
        },
      },
      include: {
        categories: true,
        author: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return updatedNews;
  }
}
