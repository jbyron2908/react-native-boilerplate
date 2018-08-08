import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import localStorage from '../../localStorage';
import localStorageKeys from '../../localStorage/localStorageKeys';

class ApolloClientWrapper {
  constructor() {
    const httpLink = createHttpLink({
      uri: 'http://10.0.3.2:4000',
    });

    const authLink = setContext(async (_, { headers }) => {
      const token = await localStorage.load(localStorageKeys.TOKEN);

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    const link = ApolloLink.from([
      authLink,
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

