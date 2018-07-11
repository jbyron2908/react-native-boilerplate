import gql from 'graphql-tag';
import apolloClient from '../client/apolloClient';

const queryGQL = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const loginMutation = (email, password) => apolloClient.mutate(queryGQL, { email, password });

export default loginMutation;
