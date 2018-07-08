import { createSelector } from 'reselect';

const authState = state => state.auth;

const getSelectToken = () => createSelector(
  authState,
  state => state.token,
);

export {
  authState,
  getSelectToken,
};
