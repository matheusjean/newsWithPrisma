export const UpdateNewsUseCase = {
  type: 'object',
  properties: {
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
    categoryIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    categoriesToRemove: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
};
