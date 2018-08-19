import { createSelector } from 'reselect';

const authState = state => state.auth;

const getSelectLogged = createSelector(
  authState,
  state => state.logged,
);

export {
  authState,
  getSelectLogged,
};
