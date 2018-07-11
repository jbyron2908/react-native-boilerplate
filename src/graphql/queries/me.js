import gql from 'graphql-tag';
import apolloClient from '../client/apolloClient';

const queryGQL = gql`{
  me {
    id       
    email
  }
}`;

const meQuery = () => apolloClient.query(queryGQL);

export default meQuery;
