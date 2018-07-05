import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import loginMutation from '../graphql/mutations/login';
import { loginSuccessAction } from '../reducers/auth';

// Actions
const LOGIN = 'epic/auth/LOGIN';

// Epic
export default action$ =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap((action) => {
      const { email, password } = action.payload;
      return loginMutation(email, password)
        .pipe(map(response =>
          loginSuccessAction(response.data.login.token)));
    }),
  );

// Action Creators
export function loginAction(email, password) {
  return {
    type: LOGIN,
    payload: { email, password },
  };
}
