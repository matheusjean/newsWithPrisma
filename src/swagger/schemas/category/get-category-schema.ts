export const CategoryUseCase = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    isActive: {
      type: 'boolean',
    },
    created_at: {
      type: 'string',
      format: 'date',
    },
  },
};
