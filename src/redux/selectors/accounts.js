import { createSelector } from 'reselect';

const accountsState = state => state.accounts;

const accountSelector = createSelector(
  accountsState,
  state => state.accounts,
);

export {
  accountsState,
  accountSelector,
};
