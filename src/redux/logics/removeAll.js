import aigle from 'aigle';
import _ from 'lodash';
import { createLogic } from 'redux-logic';
import database from '../../rxdb/database/database';
import { updateStoreAction } from './updateStore';

aigle.mixin(_);

// Actions
const type = 'logic/auth/removeAll';

// Logic
export default createLogic({
  type,
  latest: true,

  async process({ action }, dispatch, done) { // eslint-disable-line no-unused-vars
    const db = await database.getInstance();

    const userArray = await db.users.find().exec();
    await aigle.forEach(userArray, async (user) => {
      await user.remove();
    });

    const categoryArray = await db.categories.find().exec();
    await aigle.forEach(categoryArray, async (category) => {
      await category.remove();
    });

    const accountArray = await db.accounts.find().exec();
    await aigle.forEach(accountArray, async (account) => {
      await account.remove();
    });

    const transactionArray = await db.transactions.find().exec();
    await aigle.forEach(transactionArray, async (transaction) => {
      await transaction.remove();
    });

    await dispatch(updateStoreAction());

    done();
  },
});

// Action Creators
export function removeAllAction() {
  return {
    type,
  };
}
