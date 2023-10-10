import { PrismaClient, News } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
}

export default class ShowNewsService {
  public async execute({ id }: IRequest): Promise<News | null> {
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

    return news;
  }
}
