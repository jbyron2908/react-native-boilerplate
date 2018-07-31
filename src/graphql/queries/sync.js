import gql from 'graphql-tag';
import apolloClient from '../client/apolloClient';

const queryGQL = gql`{
  me {
    id
    email
    name
    categories(where: { delete_not: true }) {
      id
      name
      parent {
        id
        name
      }
    }
    accounts(where: {delete_not: true}) {
      id
      name
      type
      initialValue
    }
    transactions {
      id
      value
      operation
      category {
        id
      }
      date
      description
      note
      status
      account {
        id
      }
    }
  }
}`;

const syncQuery = () => apolloClient.query(queryGQL);

export default syncQuery;
