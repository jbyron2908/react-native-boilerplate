import storage from '../../storage/storage';
import storageKeys from '../../storage/storageKeys';

const authInterceptor = async (request) => {
  const auth = await storage.loadObject(storageKeys.AUTH);

  if (auth) {
    request.auth = auth;
  }

  return request;
};

export default authInterceptor;
