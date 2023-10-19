import { Request, Response } from 'express';
import CreateNewsService from '../service/CreateNewsService';
import DeleteNewsService from '../service/DeleteNewsService';
import ListNewsService from '../service/ListNewsService';
import ShowNewsService from '../service/ShowNewsService';
import ShowHatNewsService from '../service/ShowHatNewsService';
import UpdateNewsService from '../service/UpdateNewsService';

export default class NewsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listNews = new ListNewsService();

    const news = await listNews.execute();

    return res.json(news);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showNews = new ShowNewsService();

    const news = await showNews.execute({ id });

    return res.json(news);
  }

  public async getByHat(req: Request, res: Response): Promise<Response> {
    try {
      const { hat } = req.params;

      const news = await ShowHatNewsService.execute({ hat });

      if (!news) {
        return res.status(404).json({ error: 'Notícia não encontrada' });
      }

      return res.json(news);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar notícia por hat' });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { hat, title, text, image, link, isActive, categoryIds } = req.body;

    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const createNews = new CreateNewsService();

    try {
      const news = await createNews.execute({
        hat,
        title,
        text,
        userId,
        image,
        link,
        isActive,
        categoryIds,
      });

      return res.json(news);
    } catch (error) {
      console.error('Erro ao criar notícia:', error);
      return res.status(400).json({ error: 'Erro ao criar notícia' });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      hat,
      title,
      text,
      image,
      link,
      isActive,
      author,
      categoryIds,
      categoriesToRemove,
    } = req.body;
    const { id } = req.params;

    const updateNews = new UpdateNewsService();

    try {
      const news = await updateNews.execute({
        id,
        hat,
        title,
        text,
        image,
        link,
        isActive,
        categoryIds,
        categoriesToRemove,
        author,
      });

      return res.json(news);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar notícia' });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteNews = new DeleteNewsService();

    await deleteNews.execute({
      id,
    });

    return res.json({
      message: 'Notícia deletada com sucesso!',
    });
  }
}
