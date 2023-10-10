import { Category, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
}

export default class ShowCategoryService {
  public async execute({ id }: IRequest): Promise<Category | undefined> {
    const category = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });

    if (!category) {
      throw new AppError('Categoria não encontrada');
    }

    return category;
  }
}
