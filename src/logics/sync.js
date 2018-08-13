import aigle from 'aigle';
import _ from 'lodash';
import { createLogic } from 'redux-logic';
import syncQuery from '../graphql/queries/sync';
import localStorage from '../localStorage';
import localStorageKeys from '../localStorage/localStorageKeys';
import database from '../rxdb/database/database';
import { updateStoreAction } from './updateStore';

aigle.mixin(_);

// Actions
const type = 'logic/auth/sync';

// Logic
export default createLogic({
  type,
  latest: true,

  async process({ action }, dispatch, done) { // eslint-disable-line no-unused-vars
    const response = await syncQuery();
    const { me } = response.data;
    await updateUser(getUser(me));

    const { categories, accounts, transactions } = me;
    await updateCategories(categories);
    await updateAccounts(accounts);
    await updateTransactions(transactions);
    await dispatch(updateStoreAction());

    done();
  },
});

function getUser(me) {
  return {
    id: me.id,
    email: me.email,
    name: me.name,
  };
}

async function updateUser(user) {
  await localStorage.saveObject(localStorageKeys.USER, user);
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

// Action Creators
export function syncAction() {
  return {
    type,
  };
}
