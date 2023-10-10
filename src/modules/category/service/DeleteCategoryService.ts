import { PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
}

export default class DeleteCategoryService {
  public async execute({ id }: IRequest): Promise<void> {
    const category = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });

    if (!category) {
      throw new AppError('Categoria não encontrada');
    }

    await prisma.category.delete({
      where: {
        id: id,
      },
    });
  }
}
