import { News, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ListNewsService {
  public async execute(): Promise<News[]> {
    const news = await prisma.news.findMany({
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

    return news;
  }
}
