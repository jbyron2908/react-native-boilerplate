import { put, takeLatest, call } from 'redux-saga/effects';
import loginMutation from '../graphql/mutations/login';
import { loginSuccess, loginFail } from '../reducers/auth';
import localStorage from '../config/localStorage';

// Actions
const LOGIN = 'saga/auth/LOGIN';

// Saga
function* login(action) {
  console.log(action);
  try {
    const { email, password } = action.payload;
    const { data } = yield call(loginMutation, email, password);
    const { token } = data.login;
    console.log(`token = ${token}`);
    const saved = yield localStorage.save('token', token);
    console.log(`saved = ${saved}`);
    yield put(loginSuccess(token));
  } catch (error) {
    console.log(error);
    const cleared = yield localStorage.clear();
    console.log(`cleared = ${cleared}`);
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
