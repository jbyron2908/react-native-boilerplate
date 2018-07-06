// Actions
const USER = 'reducer/user/USER';

// Reducer
const initialState = {
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      console.log(action);
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// Action Creators
export function getUserComplete(userData) {
  return {
    type: USER,
    payload: userData,
  };
}
