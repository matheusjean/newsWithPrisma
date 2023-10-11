export const newsBycategoriesIdPath = {
  get: {
    tags: ['Category'],
    summary: 'Retorna os dados de acordo com o Name da categoria',
    description: 'Retorna os dados de acordo com o Name da categoria.',
    parameters: [
      {
        in: 'path',
        name: 'name',
        description: 'Nome da Categoria',
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
              type: 'array',
              items: {
                $ref: '#/schemas/GetNewsByCategoryUseCase',
              },
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
