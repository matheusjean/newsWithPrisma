/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './shared/http/routes';
import AppError from './shared/errors/appError';
import { errors } from 'celebrate';
import swaggerConfig from './swagger/index';
import { serve, setup } from 'swagger-ui-express';

const app = express();
const port = 3333;

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

app.use('/api-docs', serve, setup(swaggerConfig));

app.route('/').get((req: Request, res: Response) => {
  res.send({ versao: 'Api na V1' });
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Erro interno',
  });
});

app.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`);
});
