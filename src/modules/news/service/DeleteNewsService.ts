import { PrismaClient } from '@prisma/client';
import AppError from '@shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
}

export default class DeleteNewsService {
  public async execute({ id }: IRequest): Promise<void> {
    const news = await prisma.news.findUnique({
      where: {
        id: id,
      },
    });

    if (!news) {
      throw new AppError('Notícia não encontrada');
    }

    await prisma.news.delete({
      where: {
        id: id,
      },
    });
  }
}
