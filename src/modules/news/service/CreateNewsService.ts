import { News, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  hat: string;
  title: string;
  text: string;
  userId: string;
  image: string;
  link: string;
  isActive: boolean;
  categoryIds: string[];
  isHighlighted?: number;
}

export default class CreateNewsService {
  public async execute({
    hat,
    title,
    text,
    userId,
    image,
    link,
    isActive,
    categoryIds,
    isHighlighted,
  }: IRequest): Promise<News> {
    if (isHighlighted === undefined) {
      isHighlighted = 0;
    }

    const existingHighlightedNews = await prisma.news.findFirst({
      where: {
        isHighlighted: isHighlighted,
      },
    });

    if (existingHighlightedNews) {
      await prisma.news.update({
        where: { id: existingHighlightedNews.id },
        data: {
          isHighlighted: 0,
        },
      });
    }

    const existingNews = await prisma.news.findFirst({
      where: {
        hat: hat,
      },
    });

    if (existingNews) {
      throw new AppError('Já existe uma notícia com esse nome');
    }

    const createdNews = await prisma.news.create({
      data: {
        hat,
        title,
        text,
        author: {
          connect: { id: userId },
        },
        image,
        link,
        isHighlighted,
        isActive,
        categories: {
          connect: categoryIds.map((categoryId) => ({ id: categoryId })),
        },
      },
      include: {
        categories: true,
        author: true,
      },
    });

    return createdNews;
  }
}
