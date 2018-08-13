import { createLogic } from 'redux-logic';
import loginMutation from '../graphql/mutations/login';
import localStorage from '../localStorage';
import localStorageKeys from '../localStorage/localStorageKeys';
import NavigatorService from '../navigation/NavigatorService';
import { loginFailAction, loginSuccessAction } from '../reducers/auth';

// Actions
const type = 'logic/auth/LOGIN';

// Logic
export default createLogic({
  type,
  latest: true,

  async process({ action }, dispatch, done) {
    try {
      console.log(action);
      const { email, password } = action.payload;
      const { data } = await loginMutation(email, password);
      console.log(data);
      const { token } = data.login;
      await localStorage.save(localStorageKeys.TOKEN, token);
      await dispatch(loginSuccessAction(token));
      NavigatorService.navigate('Main');
      done();
    } catch (error) {
      await dispatch(loginFailAction());
      done();
    }
  },
});

// Action Creators
export function loginAction(email, password) {
  return {
    type,
    payload: { email, password },
  };
}
