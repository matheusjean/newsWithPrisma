import { PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
}

export default class DeleteCategoryService {
  public async execute({ id }: IRequest): Promise<void> {
    // Verifica se a categoria existe
    const category = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });

    if (!category) {
      throw new AppError('Categoria não encontrada');
    }

    // Remove a categoria
    await prisma.category.delete({
      where: {
        id: id,
      },
    });
  }
}
