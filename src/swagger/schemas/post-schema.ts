export const PostIdUseCase = {
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
  },
};
