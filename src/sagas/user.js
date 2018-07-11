import { call, put, takeLatest } from 'redux-saga/effects';
import meQuery from '../graphql/queries/me';
import { logout } from '../reducers/auth';
import { getUserComplete } from '../reducers/user';

// Actions
const GET_USER = 'saga/user/GET_USER';

// Saga
function* getUser() {
  try {
    const { data } = yield call(meQuery);
    yield put(getUserComplete(data.me));
  } catch (error) {
    yield put(logout());
  }
}

export default function* () {
  yield takeLatest(GET_USER, getUser);
}

// Action Creators
export function getUserSaga() {
  return {
    type: GET_USER,
  };
}
