import categoryRouter from '@modules/category/routes/Category.routes';
import newsRouter from '@modules/news/routes/News.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/news', newsRouter);

routes.use('/category', categoryRouter);

export default routes;
