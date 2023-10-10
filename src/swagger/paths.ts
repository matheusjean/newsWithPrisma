import {
  newsIdPath,
  newsPath,
  categoryPath,
  categoriesIdPath,
} from './paths/index';

export default {
  '/news': newsPath,
  '/news/{id}': newsIdPath,
  '/category': categoryPath,
  '/category/{id}': categoriesIdPath,
};
