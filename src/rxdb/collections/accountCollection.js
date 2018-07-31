
const schema = {
  title: 'Account Schema',
  description: 'Describes an Account',
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
    type: {
      type: 'string',
    },
    initialValue: {
      type: 'integer',
    },
  },
};

export default {
  name: 'accounts',
  schema,
};
