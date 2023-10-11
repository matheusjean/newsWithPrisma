import { Category, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  id: string;
  name: string;
  isActive: boolean; // Adicione a propriedade isActive
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
      // Verificar se o novo nome já existe
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

    const updateData: Record<string, any> = {}; // Inicialize um objeto de atualização vazio

    if (name) {
      updateData.name = name; // Atualize o nome se fornecido
    }

    if (isActive !== undefined) {
      updateData.isActive = isActive; // Atualize isActive se fornecido
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
