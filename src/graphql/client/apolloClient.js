import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { createStructuredSelector } from '../../../node_modules/reselect';
import configureStore from '../../config/configureStore';
import { getSelectToken } from '../../selectors/auth';

class ApolloClientWrapper {
  constructor() {
    const httpLink = createHttpLink({
      uri: 'http://10.0.3.2:4000',
    });

    const authLink = setContext((_, { headers }) => {
      // const token = await localStorage.load('token', '');
      const { token } = ApolloClientWrapper.getReduxValues();
      console.log(`token = ${token}`);

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }

  static getReduxValues() {
    const structedSelector = createStructuredSelector({
      token: getSelectToken,
    });

    const { store } = configureStore;
    return structedSelector(store.getState());
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

