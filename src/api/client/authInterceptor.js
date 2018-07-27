import localStorage from '../../config/localStorage';

const authInterceptor = async (request) => {
  const auth = await localStorage.loadObject('auth');

  if (auth) {
    request.auth = auth;
  }

  return request;
};

export default authInterceptor;
