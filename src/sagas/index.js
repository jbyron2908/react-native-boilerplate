import { all } from 'redux-saga/effects';
import login from './login';
import user from './user';
import sync from './sync';
import updateStore from './updateStore';

export default function* rootSaga() {
  yield all([
    login(),
    user(),
    sync(),
    updateStore(),
  ]);
}
