export const GetIdUseCase = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    hat: {
      type: 'string',
    },
    text: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
    link: {
      type: 'string',
    },
    isActive: {
      type: 'boolean',
    },
    created_at: {
      type: 'date',
    },
    categories: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          isActive: {
            type: 'boolean',
          },
        },
      },
    },
  },
};
