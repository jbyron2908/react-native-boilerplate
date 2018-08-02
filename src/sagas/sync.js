import { call, put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import aigle from 'aigle';
import syncQuery from '../graphql/queries/sync';
import { updateUserAction } from '../reducers/user';
import database from '../rxdb/database/database';
import { updateStoreSaga } from './updateStore';

aigle.mixin(_);

// Actions
const SYNC = 'saga/auth/sync';

// Saga
function* saga() {
  const response = yield call(syncQuery);
  const { me } = response.data;
  yield put(updateUserAction(getUser(me)));

  const { categories, accounts, transactions } = me;
  yield call(updateCategories, categories);
  yield call(updateAccounts, accounts);
  yield call(updateTransactions, transactions);
  yield put(updateStoreSaga());
}

function getUser(me) {
  return {
    id: me.id,
    email: me.email,
    name: me.name,
  };
}

async function updateCategories(categories) {
  await aigle.resolve(categories)
    .map(category => ({
      id: category.id,
      name: category.name,
      parent: category.parent ? category.parent.id : null,
    }))
    .forEach(async (category) => {
      console.log('updateCategory');
      const db = await database.getInstance();
      const categoryDoc = await db.categories.atomicUpsert(category);
      console.log(categoryDoc);
    });
}

async function updateAccounts(accounts) {
  await aigle.resolve(accounts)
    .map(account => ({
      id: account.id,
      name: account.name,
      type: account.type,
      initialValue: account.initialValue,
    }))
    .forEach(async (account) => {
      console.log('updateAccount');
      const db = await database.getInstance();
      const accountDoc = await db.accounts.atomicUpsert(account);
      console.log(accountDoc);
    });
}

async function updateTransactions(transactions) {
  await aigle.resolve(transactions)
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
      console.log('updateTransaction');
      const db = await database.getInstance();
      const transactionDoc = await db.transactions.atomicUpsert(transaction);
      console.log(transactionDoc);
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
