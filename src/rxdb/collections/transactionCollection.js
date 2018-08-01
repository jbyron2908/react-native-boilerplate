
const schema = {
  title: 'Transaction Schema',
  description: 'Describes an Transaction',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    value: {
      type: 'integer',
    },
    operation: {
      type: 'string',
    },
    category: {
      type: ['string', 'null'],
    },
    date: {
      type: 'string',
      format: 'date-time',
    },
    description: {
      type: 'string',
    },
    note: {
      type: 'string',
    },
    status: {
      type: 'string',
    },
    account: {
      type: ['string', 'null'],
    },
  },
};

export default {
  name: 'transactions',
  schema,
};
