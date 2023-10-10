export const PostUseCase = {
  type: 'object',
  properties: {
    hat: {
      type: 'string',
      example: 'Breaking News',
    },
    title: {
      type: 'string',
      example: 'New Headline',
    },
    text: {
      type: 'string',
      example: 'This is the news content.',
    },
    author: {
      type: 'string',
      example: 'John Doe',
    },
    image: {
      type: 'string',
      example: 'ogroooobo.com/image.jpg',
    },
    link: {
      type: 'string',
      example: 'https://example.com/news/123',
    },
    isActive: {
      type: 'boolean',
      example: true,
    },
    categoryIds: {
      type: 'array',
      items: {
        type: 'string',
        example: '0dc2a1f2-e05a-4679-8599-43b937513065',
      },
    },
  },
};
