/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import swaggerConfig from './swagger/index';
import { serve, setup } from 'swagger-ui-express';
import newsRouter from './modules/news/routes/News.routes';
import categoryRouter from './modules/category/routes/Category.routes';

import { Router } from 'express';

const routes = Router();

const app = express();
const port = 3333;

app.use(cors());

app.use(express.json());

app.route('/').get((req: Request, res: Response) => {
  res.send({ versao: 'Api na V1' });
});

routes.use('/news', newsRouter);

routes.use('/category', categoryRouter);

app.use(errors());

app.use('/api-docs', serve, setup(swaggerConfig));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    status: 'error',
    message: 'Erro interno',
  });
});

app.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`);
});
