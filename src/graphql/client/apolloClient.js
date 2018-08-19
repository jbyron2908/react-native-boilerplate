import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import config from './config';


class ApolloClientWrapper {
  constructor() {
    const httpLink = createHttpLink({
      uri: config.baseUrl,
    });

    const link = ApolloLink.from([
      httpLink,
    ]);

    this.client = new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  }

  query = (gql, variables = {}) => {
    const queryObject = {
      query: gql,
      variables,
    };

    const apolloQuery = this.client.query(queryObject);
    return apolloQuery;
  };

  mutate = (gql, variables = {}) => {
    const mutateObject = {
      mutation: gql,
      variables,
    };

    const apolloMutate = this.client.mutate(mutateObject);
    return apolloMutate;
  };
}

const apolloClient = new ApolloClientWrapper();

export default apolloClient;

