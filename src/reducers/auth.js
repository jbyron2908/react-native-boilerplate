import syncStorage from 'sync-storage';

// Actions
const LOGIN_SUCCESS = 'reducer/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'reducer/auth/LOGIN_FAIL';
const LOGOUT = 'reducer/auth/LOGOUT';

// Reducer
const initialState = {
  logged: false,
  token: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      syncStorage.set('token', action.payload);
      return { ...state, logged: true, token: action.payload };
    case LOGOUT:
      return { ...state, logged: false, token: '' };
    default:
      return state;
  }
}

// Action Creators
export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
}

export function loginFail() {
  return {
    type: LOGIN_FAIL,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
