export const newsPath = {
  post: {
    tags: ['News'],
    summary: 'Cria uma notícia',
    description: 'Cria um notícia no banco de dados à partir do payload',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/PostUseCase',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Criado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/PostUseCase',
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      409: {
        $ref: '#/components/conflict',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
  get: {
    tags: ['News'],
    summary: 'Retorna os dados de varias notícias.',
    description: 'Retorna os dados de varias notícias.',
    parameters: [
      {
        in: 'query',
        name: 'hat',
        description: 'Hat',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'query',
        name: 'title',
        description: 'Title',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'header',
        name: 'text',
        description: 'Text',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'header',
        name: 'author',
        description: 'Author',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'header',
        name: 'image',
        description: 'Image',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'header',
        name: 'link',
        description: 'Link',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'header',
        name: 'isActive',
        description: 'isActive',
        required: false,
        schema: {
          type: 'boolean',
        },
      },
      {
        in: 'header',
        name: 'created_at',
        description: 'created_at',
        required: false,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              oneOf: [{ $ref: '#/schemas/NewsUseCase' }, { type: 'array', items: {} }],
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
