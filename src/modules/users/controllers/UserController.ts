import { Request, Response } from 'express';
import ListUserService from '../service/ListUserService';
import CreateUserService from '../service/CreateUserService';
import FindUserByUsernameService from '../service/FindNewsByUser';

export default class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { username, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      username,
      email,
      password,
    });

    return res.json(user);
  }

  public async findByUsername(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const findUserByUsernameService = new FindUserByUsernameService();
      const user = await findUserByUsernameService.execute(username);

      if (user) {
        // Usuário encontrado
        return res.json(user);
      } else {
        // Usuário não encontrado
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar o autor:', error);
      return res.status(500).json({ error: 'Erro ao buscar o autor' });
    }
  }
}
