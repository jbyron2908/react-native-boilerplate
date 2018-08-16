import { createLogic } from 'redux-logic';
import { updateAccountsAction } from '../reducers/accounts';
import { updateCategoriesAction } from '../reducers/categories';
import { updateTransactionsAction } from '../reducers/transactions';
import { updateUserAction } from '../reducers/user';
import database from '../rxdb/database/database';
import storage from '../storage/storage';
import storageKeys from '../storage/storageKeys';

// Actions
const type = 'logic/auth/update_store';

// Logic
export default createLogic({
  type,
  latest: true,

  async process({ action }, dispatch, done) { // eslint-disable-line no-unused-vars
    console.log('updateStoreSaga');
    const user = await storage.loadObject(storageKeys.USER);
    await dispatch(updateUserAction(user));

    const categories = await getCategories();
    await dispatch(updateCategoriesAction(categories));

    const accounts = await getAccounts();
    await dispatch(updateAccountsAction(accounts));

    const transactions = await getTransactions();
    await dispatch(updateTransactionsAction(transactions));

    done();
  },
});

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

// Action Creators
export function updateStoreAction() {
  return {
    type,
  };
}
