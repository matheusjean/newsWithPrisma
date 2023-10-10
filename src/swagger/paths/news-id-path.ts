export const newsIdPath = {
  get: {
    tags: ['News'],
    summary: 'Retorna os dados de acordo com o id da notícia',
    description: 'Retorna os dados de acordo com o id da notícia.',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID da notícia',
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
                { $ref: '#/schemas/GetIdUseCase' },
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
  patch: {
    tags: ['News'],
    summary: 'Atualiza uma notícia',
    description: 'Atualiza uma notícia de acordo com o Id salvo no ms News.',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID da notícia',
        required: true,
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/UpdateNewsUseCase',
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
                { $ref: '#/schemas/UpdateNewsUseCase' },
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
    tags: ['News'],
    summary: 'Deleta uma notícia pelo Id salvo no banco',
    description:
      'Realiza um soft delete em uma notícia de acordo com o id salvo no ms News. Não aceita id externo',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: 'ID da notícia',
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
