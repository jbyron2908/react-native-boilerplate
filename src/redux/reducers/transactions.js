import _ from 'lodash';

// Actions
const UPDATE_TRANSACTIONS = 'reducer/transactions/UPDATE_TRANSACTIONS';
const ADD_TRANSACTION = 'reducer/transactions/ADD_TRANSACTION';
const REMOVE_TRANSACTION = 'reducer/transactions/REMOVE_TRANSACTION';

// Reducer
const initialState = {
  transactions: [],
};

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_TRANSACTIONS:
      return {
        ...state,
        transactions: payload,
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    case REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: _.filter(state.transactions, category => category.id !== payload.id),
      };
    default:
      return state;
  }
}

// Action Creators
export function updateTransactionsAction(transactions) {
  return {
    type: UPDATE_TRANSACTIONS,
    payload: transactions,
  };
}

export function addTransactionAction(category) {
  return {
    type: ADD_TRANSACTION,
    payload: category,
  };
}

export function removeTransactionAction(category) {
  return {
    type: REMOVE_TRANSACTION,
    payload: category,
  };
}
