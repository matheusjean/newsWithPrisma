export const categoriesIdPath = {
  get: {
    tags: ['Category'],
    summary: 'Retorna os dados de acordo com o id da categoria',
    description: 'Retorna os dados de acordo com o id da categoria.',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID da categoria',
        required: true,
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
                { $ref: '#/schemas/category/GetCategoryIdUseCase' },
                {
                  type: 'array',
                  items: {},
                },
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

  put: {
    tags: ['Category'],
    summary: 'Atualiza uma categoria',
    description: 'Atualiza uma categoria de acordo com o ID.',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID da categoria',
        required: true,
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/UpdateCategoryUseCase',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              oneOf: [
                { $ref: '#/schemas/UpdateCategoryUseCase' },
                {
                  type: 'array',
                  orders: {},
                },
              ],
            },
          },
        },
      },
      204: {
        $ref: '#/components/noContent',
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

  delete: {
    tags: ['Category'],
    summary: 'Deleta uma categoria pelo Id salvo no banco',
    description: 'Delete em uma categoria de acordo com o ID',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID da categoria',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      204: {
        $ref: '#/components/noContent',
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
