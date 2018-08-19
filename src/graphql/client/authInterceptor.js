import { setContext } from 'apollo-link-context';
import storage from '../../storage/storage';
import storageKeys from '../../storage/storageKeys';


const authInterceptor = setContext(async (_, { headers }) => {
  const token = await storage.load(storageKeys.TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export default authInterceptor;
