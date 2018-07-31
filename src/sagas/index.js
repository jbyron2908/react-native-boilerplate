import { all } from 'redux-saga/effects';
import login from './login';
import user from './user';
import sync from './sync';

export default function* rootSaga() {
  yield all([
    login(),
    user(),
    sync(),
  ]);
}
