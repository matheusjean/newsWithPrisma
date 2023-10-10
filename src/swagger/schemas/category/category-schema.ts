export const GetCategoryIdUseCase = {
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
      created_at: {
        type: 'date',
      },
    },
  },
};
