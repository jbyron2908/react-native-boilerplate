import { call, put, takeLatest } from 'redux-saga/effects';
import loginMutation from '../graphql/mutations/login';
import { loginFail, loginSuccess } from '../reducers/auth';

// Actions
const LOGIN = 'saga/auth/LOGIN';

// Saga
function* login(action) {
  try {
    const { email, password } = action.payload;
    const { data } = yield call(loginMutation, email, password);
    const { token } = data.login;
    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFail());
  }
}

export default function* () {
  yield takeLatest(LOGIN, login);
}

// Action Creators
export function loginSaga(email, password) {
  return {
    type: LOGIN,
    payload: { email, password },
  };
}
