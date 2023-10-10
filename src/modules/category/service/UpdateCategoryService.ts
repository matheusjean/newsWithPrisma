import { Category, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
  name: string;
}

export default class UpdateCategoryService {
  public async execute({ id, name }: IRequest): Promise<Category> {
    const existingCategory = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingCategory) {
      throw new AppError('Categoria não encontrada');
    }

    const categoryWithSameName = await prisma.category.findFirst({
      where: {
        name: name,
        NOT: {
          id: id,
        },
      },
    });

    if (categoryWithSameName) {
      throw new AppError('Já existe uma categoria com esse nome');
    }

    const updatedCategory = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });

    return updatedCategory;
  }
}
