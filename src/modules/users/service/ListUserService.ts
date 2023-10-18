import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

class ListUserService {
  public async execute(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }
}

export default ListUserService;
