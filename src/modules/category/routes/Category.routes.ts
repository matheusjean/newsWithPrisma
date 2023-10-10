import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get('/', categoryController.index);

categoryRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  categoryController.show,
);

categoryRouter.get(
  '/by-category/:name',
  celebrate({
    [Segments.PARAMS]: {
      name: Joi.string().required(),
    },
  }),
  categoryController.findNewsByCategory,
);

categoryRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      isActive: Joi.boolean().required(),
    },
  }),
  categoryController.create,
);

categoryRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      isActive: Joi.boolean(),
    },
  }),
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  categoryController.update,
);

categoryRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  categoryController.delete,
);

export default categoryRouter;
