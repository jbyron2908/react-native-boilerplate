import { call, put, takeLatest } from 'redux-saga/effects';
import { updateCategoriesAction } from '../reducers/categories';
import database from '../rxdb/database/database';
import { updateAccountsAction } from '../reducers/accounts';
import { updateTransactionsAction } from '../reducers/transactions';
import localStorage from '../localStorage';
import localStorageKeys from '../localStorage/localStorageKeys';
import { updateUserAction } from '../reducers/user';

// Actions
const UPDATE_STORE = 'saga/auth/update_store';

// Saga
function* saga() {
  console.log('updateStoreSaga');
  const user = yield call(localStorage.loadObject, localStorageKeys.USER);
  yield put(updateUserAction(user));

  const categories = yield call(getCategories);
  yield put(updateCategoriesAction(categories));

  const accounts = yield call(getAccounts);
  yield put(updateAccountsAction(accounts));

  const transactions = yield call(getTransactions);
  yield put(updateTransactionsAction(transactions));
}

async function getCategories() {
  console.log('getCategories');
  const db = await database.getInstance();
  const categories = await db.categories.find().exec();
  console.log(categories);
  return categories;
}

async function getAccounts() {
  console.log('getAccounts');
  const db = await database.getInstance();
  const accounts = await db.accounts.find().exec();
  console.log(accounts);
  return accounts;
}

async function getTransactions() {
  console.log('getTransactions');
  const db = await database.getInstance();
  const transactions = await db.transactions.find().exec();
  console.log(transactions);
  return transactions;
}

export default function* () {
  yield takeLatest(UPDATE_STORE, saga);
}

// Action Creators
export function updateStoreSaga() {
  return {
    type: UPDATE_STORE,
  };
}
