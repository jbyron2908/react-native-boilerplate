
const userSchema = {
  title: 'user schema',
  description: 'describes a simple user',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
  },
};

export default {
  name: 'users',
  schema: userSchema,
};
