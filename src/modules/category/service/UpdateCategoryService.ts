import { Category, PrismaClient } from '@prisma/client';
import AppError from '@shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
  name: string;
}

export default class UpdateCategoryService {
  public async execute({ id, name }: IRequest): Promise<Category> {
    // Verifica se a categoria existe
    const existingCategory = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingCategory) {
      throw new AppError('Categoria não encontrada');
    }

    // Verifica se já existe uma categoria com o mesmo nome
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

    // Atualiza o nome da categoria
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
