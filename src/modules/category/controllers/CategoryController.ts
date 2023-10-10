import { Request, Response } from 'express';
import CreateCategoryService from '../service/CreateCategoryService';
import DeleteCategoryService from '../service/DeleteCategoryService';
import ListCategoryService from '../service/ListCategoryService';
import ShowCategoryService from '../service/ShowCategoryService';
import UpdateCategoryService from '../service/UpdateCategoryService';
import FindNewsByCategoryService from '../service/FindNewsByCategoryService ';

export default class CategoryController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listCategory = new ListCategoryService();

    const categories = await listCategory.execute();

    return res.json(categories);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showCategory = new ShowCategoryService();

    const category = await showCategory.execute({ id });

    return res.json(category);
  }

  public async findNewsByCategory(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const { name } = req.params; // Obtenha o nome da categoria da solicitação

    // Chame o serviço para buscar notícias por categoria
    const newsByCategory = await FindNewsByCategoryService.execute({ name });

    return res.json(newsByCategory);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, isActive } = req.body;

      const createCategory = new CreateCategoryService();

      const category = await createCategory.execute({
        name,
        isActive,
      });

      return res.json(category);
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      return res.status(500).json({ error: 'Erro interno ao criar categoria' });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name } = req.body;

    const updateCategory = new UpdateCategoryService();

    const category = await updateCategory.execute({
      id,
      name,
    });
    return res.json(category);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCategory = new DeleteCategoryService();

    await deleteCategory.execute({
      id,
    });

    return res.json({
      message: 'Categoria deletada com sucesso!',
    });
  }
}
