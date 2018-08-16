import { createLogic } from 'redux-logic';
import loginMutation from '../graphql/mutations/login';
import { loginFailAction, loginSuccessAction } from '../reducers/auth';
import storage from '../storage/storage';
import storageKeys from '../storage/storageKeys';
import NavigatorService from '../views/navigation/NavigatorService';

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
      await storage.save(storageKeys.TOKEN, token);
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
