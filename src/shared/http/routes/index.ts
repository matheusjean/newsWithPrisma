import categoryRouter from '../../../modules/category/routes/Category.routes';
import newsRouter from '../../../modules/news/routes/News.routes';
import { Router } from 'express';
import sessionRouter from '../../../modules/users/routes/Sessions.routes';
import usersRouter from '../../../modules/users/routes/Users.routes';

const routes = Router();

routes.use('/login', sessionRouter);

routes.use('/author', usersRouter);

routes.use('/news', newsRouter);

routes.use('/category', categoryRouter);

export default routes;
