import { call, put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
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
  _(categories)
    .map(category => ({
      id: category.id,
      name: category.name,
      parent: category.parent ? category.parent.id : null,
    }))
    .forEach(async (category) => {
      const db = await database.getInstance();
      await db.categories.atomicUpsert(category);
    });
}

async function updateAccounts(accounts) {
  console.log('updateAccounts');
  console.log(accounts);
  _(accounts)
    .map(account => ({
      id: account.id,
      name: account.name,
      type: account.type,
      initialValue: account.initialValue,
    }))
    .forEach(async (account) => {
      const db = await database.getInstance();
      await db.accounts.atomicUpsert(account);
    });
}

async function updateTransactions(transactions) {
  console.log('updateTransactions');
  console.log(transactions);
  _(transactions)
    .map(transaction => ({
      id: transaction.id,
      value: transaction.value,
      operation: transaction.operation,
      category: transaction.category ? transaction.category.id : null,
      date: transaction.date,
      description: transaction.description,
      note: transaction.note,
      status: transaction.status,
      account: transaction.account ? transaction.account.id : null,
    }))
    .forEach(async (transaction) => {
      const db = await database.getInstance();
      await db.transactions.atomicUpsert(transaction);
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
