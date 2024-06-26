import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'News Service',
    description: 'Essa é a documentação da API de notícias.',
    version: '1.0.0',
  },
  tags: [
    {
      name: 'News',
      description: 'API relacionada a notícias',
    },
    {
      name: 'Category',
      description: 'API relacionada as categorias das notícias',
    },
  ],
  paths,
  schemas,
  components,
  security: [{ keycloak: [] }],
};
