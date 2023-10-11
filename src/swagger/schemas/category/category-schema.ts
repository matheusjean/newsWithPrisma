export const GetCategoryIdUseCase = {
  type: 'object',
  items: {
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
