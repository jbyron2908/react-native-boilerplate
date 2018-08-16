import { createLogic } from 'redux-logic';
import meQuery from '../../graphql/queries/me';
import { logoutAction } from '../reducers/auth';
import { getUserComplete } from '../reducers/user';

// Actions
const type = 'logic/user/GET_USER';

// Logic
export default createLogic({
  type,
  latest: true,

  async process({ action }, dispatch, done) { // eslint-disable-line no-unused-vars
    try {
      const { data } = await meQuery();
      await dispatch(getUserComplete(data.me));
    } catch (error) {
      await dispatch(logoutAction());
    }
    done();
  },
});

// Action Creators
export function getUserAction() {
  return {
    type,
  };
}
