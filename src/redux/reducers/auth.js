
// Actions
const LOGIN_SUCCESS = 'reducer/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'reducer/auth/LOGIN_FAIL';
const LOGOUT = 'reducer/auth/LOGOUT';

// Reducer
const initialState = {
  logged: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, logged: true };
    case LOGIN_FAIL:
      return { ...state, logged: false };
    case LOGOUT:
      return { ...state, logged: false };
    default:
      return state;
  }
}

// Action Creators
export function loginSuccessAction() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailAction() {
  return {
    type: LOGIN_FAIL,
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
