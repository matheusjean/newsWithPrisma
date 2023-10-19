// FindUserByUsernameService.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class FindUserByUsernameService {
  public async execute(username: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          username,
        },
        include: {
          news: true,
        },
      });

      return user;
    } catch (error) {
      throw new Error('Erro ao buscar o autor por nome de usuário');
    }
  }
}

export default FindUserByUsernameService;
