export const conflict = {
  description: 'Não foi possível criar pois esta notícia já existe.',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
    },
  },
};
