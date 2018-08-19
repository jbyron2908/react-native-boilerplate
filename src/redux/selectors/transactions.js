import { createSelector } from 'reselect';

const transactionsState = state => state.transactions;

const transactionsSelector = createSelector(
  transactionsState,
  state => state.transactions,
);

export {
  transactionsState,
  transactionsSelector,
};
