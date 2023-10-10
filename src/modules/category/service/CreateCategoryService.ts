import { Category, PrismaClient } from '@prisma/client';
import AppError from '../../../shared/errors/appError';

const prisma = new PrismaClient();

interface IRequest {
  name: string;
  isActive: boolean;
  newsIds?: string[];
}

export default class CreateCategoryService {
  public async execute({
    name,
    isActive,
    newsIds,
  }: IRequest): Promise<Category> {
    const existingCategory = await prisma.category.findFirst({
      where: {
        name: name,
      },
    });

    if (existingCategory) {
      throw new AppError('Já existe uma categoria com esse nome');
    }

    // Cria a categoria sem definir manualmente o campo "id"
    const createdCategory = await prisma.category.create({
      data: {
        name: name,
        isActive: isActive,
        news: {
          connect: newsIds?.map((newsId) => ({ id: newsId })),
        },
      },
    });

    return createdCategory;
  }
}
