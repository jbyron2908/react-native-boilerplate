import client from '../client/client';

const meRequest = (email, password) =>
  client.get('/v1/me', {
    auth: {
      username: email,
      password,
    },
  });

export default { meRequest };
