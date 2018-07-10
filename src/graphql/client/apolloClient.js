import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import syncStorage from 'sync-storage';

const httpLink = createHttpLink({
  uri: 'http://10.0.3.2:4000',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = syncStorage.get('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const query = (gql, variables = {}) => {
  const queryObject = {
    query: gql,
    variables,
  };

  const apolloQuery = client.query(queryObject);
  return apolloQuery;
};

export const mutate = (gql, variables = {}) => {
  const mutateObject = {
    mutation: gql,
    variables,
  };

  const apolloMutate = client.mutate(mutateObject);
  return apolloMutate;
};
