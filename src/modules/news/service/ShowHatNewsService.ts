import { News, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface IRequest {
  hat: string;
}

class ShowHatNewsService {
  public static async execute({ hat }: IRequest): Promise<News | null> {
    const news = await prisma.news.findFirst({
      where: {
        hat: hat,
      },
      include: {
        categories: true,
      },
    });

    return news || null;
  }

  public static async findNewsByHat({ hat }: IRequest): Promise<News | null> {
    const news = await prisma.news.findFirst({
      where: {
        hat: hat,
      },
    });

    return news || null;
  }
}

export default ShowHatNewsService;
