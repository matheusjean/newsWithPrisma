import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import NewsController from '../controllers/NewsController';
import authenticateUser from '../../../config/middleware/auth2';

const newsRouter = Router();
const newsController = new NewsController();

newsRouter.get('/', newsController.index);

newsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  newsController.show,
);

newsRouter.get(
  '/by-hat/:hat',
  celebrate({
    [Segments.PARAMS]: {
      hat: Joi.string().required(),
    },
  }),
  newsController.getByHat,
);
newsRouter.post(
  '/',
  authenticateUser,
  celebrate({
    [Segments.BODY]: {
      hat: Joi.string().required(),
      title: Joi.string().required(),
      text: Joi.string().required(),
      image: Joi.string().required(),
      link: Joi.string().required(),
      isActive: Joi.boolean().required(),
      isHighlighted: Joi.number().valid(0, 1, 2, 3).optional(),
      categoryIds: Joi.array().items(Joi.string()),
    },
  }),
  newsController.create,
);

newsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      hat: Joi.string(),
      title: Joi.string(),
      text: Joi.string(),
      image: Joi.string(),
      link: Joi.string(),
      isActive: Joi.boolean(),
      isHighlighted: Joi.number().valid(0, 1, 2, 3).optional(),
      categoryIds: Joi.array().items(Joi.string()),
      categoriesToRemove: Joi.array().items(Joi.string()),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  newsController.update,
);
newsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  newsController.delete,
);

export default newsRouter;
