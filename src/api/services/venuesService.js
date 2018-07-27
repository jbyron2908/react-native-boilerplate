import client from '../client/client';

const venuesRequest = () => client.get('/v1/venues');

export default { venuesRequest };
