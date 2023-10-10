export const newsPath = {
  post: {
    tags: ['News'],
    summary: 'Cria uma notícia',
    description: 'Cria uma notícia no banco de dados',
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
    summary: 'Retorna os dados de várias notícias.',
    description: 'Retorna os dados de várias notícias.',
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
        in: 'query',
        name: 'text',
        description: 'Text',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'query',
        name: 'author',
        description: 'Author',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'query',
        name: 'image',
        description: 'Image',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'query',
        name: 'link',
        description: 'Link',
        required: false,
        schema: {
          type: 'string',
        },
      },
      {
        in: 'query',
        name: 'isActive',
        description: 'isActive',
        required: false,
        schema: {
          type: 'boolean',
        },
      },
      {
        in: 'query',
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
              type: 'array',
              items: {
                $ref: '#/schemas/NewsUseCase',
                properties: {
                  categories: {
                    type: 'array',
                    items: {
                      $ref: '#/schemas/Category',
                    },
                  },
                },
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

  '/news/by-hat/{hat}': {
    get: {
      tags: ['News'],
      summary: 'Retorna os dados de notícias por categoria.',
      description: 'Retorna os dados de notícias por categoria.',
      parameters: [
        {
          in: 'path',
          name: 'hat',
          description: 'Hat',
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
                  $ref: '#/schemas/NewsUseCase',
                  properties: {
                    categories: {
                      type: 'array',
                      items: {
                        $ref: '#/schemas/Category',
                      },
                    },
                  },
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
  },
};
