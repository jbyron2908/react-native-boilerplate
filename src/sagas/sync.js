import { call, put, takeLatest } from 'redux-saga/effects';
import syncQuery from '../graphql/queries/sync';
import { updateUserAction } from '../reducers/user';
import database from '../rxdb/database/database';

// Actions
const SYNC = 'saga/auth/sync';

// Saga
function* saga() {
  const response = yield call(syncQuery);
  const { me } = response.data;
  yield updateUser(me);

  const { categories, accounts, transactions } = me;
  yield updateCategories(categories);
  yield updateAccounts(accounts);
  yield updateTransactions(transactions);
}

function* updateUser(me) {
  const user = {
    id: me.id,
    email: me.email,
    name: me.name,
  };
  yield put(updateUserAction(user));
}

async function updateCategories(categories) {
  console.log('updateCategories');
  console.log(categories);
  categories.forEach(async (category) => {
    console.log('updateCategory');
    console.log(category);
    try {
      const db = await database.getInstance();
      await db.categories.atomicUpsert(category);
    } catch (error) {
      console.log(error);
    }
  });
}

async function updateAccounts(accounts) {
  console.log('updateAccounts');
  console.log(accounts);
  accounts.forEach(async (account) => {
    console.log('updateAccount');
    console.log(account);
    try {
      const db = await database.getInstance();
      await db.accounts.atomicUpsert(account);
    } catch (error) {
      console.log(error);
    }
  });
}

async function updateTransactions(transactions) {
  console.log('updateTransactions');
  console.log(transactions);
  transactions.forEach(async (transaction) => {
    console.log('updateTransaction');
    console.log(transaction);
    try {
      const db = await database.getInstance();
      await db.transactions.atomicUpsert(transaction);
    } catch (error) {
      console.log(error);
    }
  });
}

export default function* () {
  yield takeLatest(SYNC, saga);
}

// Action Creators
export function syncSaga() {
  return {
    type: SYNC,
  };
}
