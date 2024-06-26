import { newsBycategoriesIdPath } from './paths/category/news-by-category-path';
import {
  newsIdPath,
  newsPath,
  categoryPath,
  categoriesIdPath,
} from './paths/index';
import { newsByHatPath } from './paths/news-by-hat';

export default {
  '/news': newsPath,
  '/news/{id}': newsIdPath,
  '/news/by-hat/{hat}': newsByHatPath,
  '/category': categoryPath,
  '/category/{id}': categoriesIdPath,
  '/category/by-category/{name}': newsBycategoriesIdPath,
};
