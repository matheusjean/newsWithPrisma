import { Request, Response } from 'express';
import CreateSessionsService from '../service/CreateSessionService';

class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const createSession = new CreateSessionsService();

      const { user, token } = await createSession.execute({
        email,
        password,
      });

      return res.json({ user, token });
    } catch (error) {
      console.error('Erro ao criar sessão:', error);
      return res.status(401).json({ error: 'Falha na autenticação' });
    }
  }
}

export default SessionsController;
