import { News, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
}

export default class ShowNewsService {
  public async execute({ id }: IRequest): Promise<News[]> {
    const news = await prisma.news.findUnique({
      where: {
        id: id,
      },
    });

    if (!news) {
      throw new AppError('Notícia não encontrada');
    }

    return [news];
  }
}
