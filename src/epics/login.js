import { ofType } from 'redux-observable';
import { flatMap, mergeMap, catchError } from 'rxjs/operators';
import loginMutation from '../graphql/mutations/login';
import { loginSuccess, loginFail } from '../reducers/auth';
import { of } from 'rxjs';

// Actions
const LOGIN = 'epic/auth/LOGIN';

// Epic
export default action$ =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap((action) => {
      const { email, password } = action.payload;
      return of(loginMutation(email, password)
        .pipe(
          flatMap(data => [mapFail(data), mapSuccess(data)]),
          catchError(loginFailError),
        ));
    }),
  );

const mapSuccess = (response) => {
  console.log(response);
  return loginSuccess(response.data.login.token);
};

const mapFail = (response) => {
  console.log(response);
  return loginFail();
};

const loginFailError = (error) => {
  console.log(error);
  return of(loginFail());
};

// Action Creators
export function loginEpic(email, password) {
  return {
    type: LOGIN,
    payload: { email, password },
  };
}
