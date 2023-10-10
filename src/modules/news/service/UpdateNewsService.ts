import { News, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
  hat: string;
  title: string;
  text: string;
  author: string;
  image: string;
  link: string;
  isActive: boolean;
  categoryIds?: string[];
}

export default class UpdateNewsService {
  public async execute({
    id,
    hat,
    title,
    text,
    author,
    image,
    link,
    isActive,
    categoryIds,
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

    const newsWithSameHat = await prisma.news.findFirst({
      where: {
        hat: hat,
        NOT: {
          id: id,
        },
      },
    });

    if (newsWithSameHat) {
      throw new AppError('Já existe uma notícia com esse nome');
    }

    const updatedNews = await prisma.news.update({
      where: {
        id: id,
      },
      data: {
        hat: hat,
        title: title,
        text: text,
        author: author,
        image: image,
        link: link,
        isActive: isActive,
        categories: {
          connect: categoryIds?.map((categoryId) => ({ id: categoryId })) || [],
        },
      },
      include: {
        categories: true,
      },
    });

    return updatedNews;
  }
}
