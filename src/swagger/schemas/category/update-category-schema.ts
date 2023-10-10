export const UpdateCategoryUseCase = {
  type: 'array',
  orders: {
    type: 'object',
    properties: {
      externalId: {
        type: 'string',
      },
      discountCoupon: {
        type: 'number',
      },
      origin: {
        type: 'string',
      },
      creationDate: {
        type: 'string',
        format: 'date',
      },
    },
  },
};
