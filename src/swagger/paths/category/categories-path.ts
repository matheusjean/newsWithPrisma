export const categoryPath = {
  post: {
    tags: ['Category'],
    summary: 'Cria uma categoria',
    description: 'Cria um categoria no banco de dados à partir do payload',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/PostCategoryUseCase',
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
              $ref: '#/schemas/PostCategoryUseCase',
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
    tags: ['Category'],
    summary: 'Retorna os dados de varias categorias.',
    description: 'Retorna os dados de varias categorias.',
    parameters: [
      {
        in: 'query',
        name: 'name',
        description: 'Name',
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
              oneOf: [
                { $ref: '#/schemas/CategoryUseCase' },
                { type: 'array', items: {} },
              ],
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
