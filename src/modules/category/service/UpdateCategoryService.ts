import { Category, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
  name: string;
  isActive: boolean;
}

export default class UpdateCategoryService {
  public async execute({ id, name, isActive }: IRequest): Promise<Category> {
    const existingCategory = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingCategory) {
      throw new AppError('Categoria não encontrada');
    }

    if (name) {
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
    }

    const updateData: Record<string, any> = {};

    if (name) {
      updateData.name = name;
    }

    if (isActive !== undefined) {
      updateData.isActive = isActive;
    }

    const updatedCategory = await prisma.category.update({
      where: {
        id: id,
      },
      data: updateData,
    });

    return updatedCategory;
  }
}
