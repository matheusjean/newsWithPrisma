import { PrismaClient, News } from '@prisma/client';

const prisma = new PrismaClient();

interface IRequest {
  name: string;
}

class FindNewsByCategoryService {
  public static async execute({ name }: IRequest): Promise<News[]> {
    const news = await prisma.news.findMany({
      where: {
        categories: {
          some: {
            name: name,
          },
        },
      },
    });

    return news;
  }
}

export default FindNewsByCategoryService;
