import { createSelector } from 'reselect';

const authState = state => state.auth;

const loggedSelector = createSelector(
  authState,
  state => state.logged,
);

export {
  authState,
  loggedSelector,
};
