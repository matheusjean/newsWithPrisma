import { PrismaClient, User } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

interface IRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ username, email, password }: IRequest): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error('Email já existe!');
    }

    const passwordHash = await hash(password, 8);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash,
      },
    });

    return newUser;
  }
}

export default CreateUserService;
