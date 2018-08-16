// Actions
const USER = 'reducer/user/USER_UPDATE';

// Reducer
const initialState = {
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// Action Creators
export function updateUserAction(userData) {
  return {
    type: USER,
    payload: userData,
  };
}
