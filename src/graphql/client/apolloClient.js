import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { from } from 'rxjs';
import syncStorage from 'sync-storage';

const httpLink = createHttpLink({
  uri: 'http://10.0.3.2:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const query = (gql, variables = {}) => {
  const token = syncStorage.get('token');

  const queryObject = {
    query: gql,
    variables,
  };

  if (token) {
    queryObject.context = {
      headers: {
        authorization: token,
      },
    };
  }

  const apolloQuery = client.query(queryObject);
  const queryObservable = from(apolloQuery);
  return queryObservable;
};

export const mutate = (gql, variables = {}) => {
  const token = syncStorage.get('token');

  const mutateObject = {
    mutation: gql,
    variables,
  };

  if (token) {
    mutateObject.context = {
      headers: {
        authorization: token,
      },
    };
  }

  const apolloMutate = client.mutate(mutateObject);
  const mutateObservable = from(apolloMutate);
  return mutateObservable;
};
