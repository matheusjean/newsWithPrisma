import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class FindUserByUsernameService {
  public async execute(username: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          username,
        },
        select: {
          id: true,
          email: true,
          username: true,
        },
      });

      if (!user) {
        throw new Error('Autor não encontrado');
      }

      const authorId = user.id;

      const news = await prisma.news.findMany({
        where: {
          authorId,
        },
        include: {
          categories: true,
        },
      });

      return {
        user,
        news,
      };
    } catch (error) {
      throw new Error('Erro ao buscar o autor por nome de usuário');
    }
  }
}

export default FindUserByUsernameService;
