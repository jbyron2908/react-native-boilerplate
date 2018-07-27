import Axios from 'axios';
import authInterceptor from './authInterceptor';

const client = Axios.create({
  baseURL: 'http://demo1.spotsales.symbiosweden.eu/rest/',
});

client.interceptors.request.use(authInterceptor);

export default client;
