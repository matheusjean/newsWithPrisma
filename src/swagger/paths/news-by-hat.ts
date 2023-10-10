export const newsByHatPath = {
  get: {
    tags: ['News'],
    summary: 'Retorna os dados de acordo com o HAT da notícia',
    description: 'Retorna os dados de acordo com o HAT da notícia.',
    parameters: [
      {
        in: 'path',
        name: 'hat',
        description: 'Notícia de acordo com o Hat',
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
};
