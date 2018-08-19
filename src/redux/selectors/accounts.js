import { createSelector } from 'reselect';

const accountsState = state => state.accounts;

const accountsSelector = createSelector(
  accountsState,
  state => state.accounts,
);

export {
  accountsState,
  accountsSelector,
};
