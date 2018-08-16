import _ from 'lodash';

// Actions
const UPDATE_ACCOUNTS = 'reducer/accounts/UPDATE_ACCOUNTS';
const ADD_ACCOUNT = 'reducer/accounts/ADD_ACCOUNT';
const REMOVE_ACCOUNT = 'reducer/accounts/REMOVE_ACCOUNT';

// Reducer
const initialState = {
  accounts: [],
};

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_ACCOUNTS:
      return {
        ...state,
        accounts: payload,
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, payload],
      };
    case REMOVE_ACCOUNT:
      return {
        ...state,
        accounts: _.filter(state.accounts, account => account.id !== payload.id),
      };
    default:
      return state;
  }
}

// Action Creators
export function updateAccountsAction(accounts) {
  return {
    type: UPDATE_ACCOUNTS,
    payload: accounts,
  };
}

export function addAccountAction(account) {
  return {
    type: ADD_ACCOUNT,
    payload: account,
  };
}

export function removeAccountAction(account) {
  return {
    type: REMOVE_ACCOUNT,
    payload: account,
  };
}
