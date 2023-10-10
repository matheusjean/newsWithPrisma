import { errorSchema as error } from './schemas/error';
import { NewsUseCase } from './schemas/get-schema';
import { GetIdUseCase } from './schemas/news-schema';
import { PostUseCase } from './schemas/post-news-schema';
import { PostIdUseCase } from './schemas/post-schema';
import { UpdateNewsUseCase } from './schemas/update-schema';
import { CategoryUseCase } from './schemas/category/get-category-schema';
import { GetCategoryIdUseCase } from './schemas/category/category-schema';
import { PostCategoryUseCase } from './schemas/category/post-category-schema';
import { PostCategoryIdUseCase } from './schemas/category/post-schema';
import { UpdateCategoryUseCase } from './schemas/category/update-category-schema';

export default {
  NewsUseCase,
  error,
  GetIdUseCase,
  PostUseCase,
  PostIdUseCase,
  UpdateNewsUseCase,
  CategoryUseCase,
  GetCategoryIdUseCase,
  PostCategoryUseCase,
  PostCategoryIdUseCase,
  UpdateCategoryUseCase,
};
