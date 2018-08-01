
const schema = {
  title: 'Category Schema',
  description: 'Describes a Category',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    name: {
      type: 'string',
    },
    parent: {
      type: ['string', 'null'],
    },
  },
};

export default {
  name: 'categories',
  schema,
};
