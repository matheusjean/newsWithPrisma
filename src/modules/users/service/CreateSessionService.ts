import { PrismaClient, User } from '@prisma/client';
import AppError from '../../../shared/errors/appError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../config/middleware/authConfig';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

const prisma = new PrismaClient();

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError('E-mail não encontrado', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Senha incorreta', 401);
    }

    const token = sign(
      { id: user.id, username: user.username },
      authConfig.jwt.secret,
      {
        subject: user.id,
        expiresIn: authConfig.jwt.expiresIn,
      },
    );

    return {
      user,
      token,
    };
  }
}

export default CreateSessionsService;
