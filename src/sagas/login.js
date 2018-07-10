import { put, takeLatest, call } from 'redux-saga/effects';
import loginMutation from '../graphql/mutations/login';
import { loginSuccess, loginFail } from '../reducers/auth';

// Actions
const LOGIN = 'saga/auth/LOGIN';

// Saga
function* login(action) {
  console.log(action);
  try {
    const { email, password } = action.payload;
    const { data } = yield call(loginMutation, email, password);
    console.log(data);
    yield put(loginSuccess(data.login.token));
  } catch (error) {
    console.log(error);
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
