import { Category, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ListCategoryService {
  public async execute(): Promise<Category[]> {
    // Retorna todas as categorias
    const categories = await prisma.category.findMany();

    return categories;
  }
}
