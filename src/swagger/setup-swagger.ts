import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'News',
    description: 'Essa é a documentação da API de notícias.',
    version: '1.0.0',
    contact: {
      name: '',
      email: '',
      url: '',
    },
    license: {
      name: '',
      url: '',
    },
  },
  servers: [
    {
      url: '/',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'News Check',
      description: 'APIs relacionadas a news',
    },
  ],
  paths,
  schemas,
  components,
};
