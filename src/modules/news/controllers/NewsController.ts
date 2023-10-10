import { Request, Response } from 'express';
import CreateNewsService from '../service/CreateNewsService';
import DeleteNewsService from '../service/DeleteNewsService';
import ListNewsService from '../service/ListNewsService';
import ShowNewsService from '../service/ShowNewsService';
import UpdateNewsService from '../service/UpdateNewsService';
import ShowHatNewsService from '../service/ShowHatNewsService';
import AppError from '../../../shared/errors/appError';

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
    const { hat, title, text, author, image, link, isActive, categoryIds } =
      req.body;

    const createNews = new CreateNewsService();

    try {
      const news = await createNews.execute({
        hat,
        title,
        text,
        author,
        image,
        link,
        isActive,
        categoryIds,
      });

      return res.json(news);
    } catch (error) {
      console.error('Erro ao criar notícia:', error);
      throw new AppError('Erro ao criar notícia', 400);
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { hat, title, text, author, image, link, isActive, categoryIds } =
      req.body;
    const { id } = req.params;

    const updateNews = new UpdateNewsService();

    const news = await updateNews.execute({
      id,
      hat,
      title,
      text,
      author,
      image,
      link,
      isActive,
      categoryIds,
    });

    return res.json(news);
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
