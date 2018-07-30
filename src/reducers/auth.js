
// Actions
const LOGIN_SUCCESS = 'reducer/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'reducer/auth/LOGIN_FAIL';
const LOGOUT = 'reducer/auth/LOGOUT';

// Reducer
const initialState = {
  token: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    case LOGIN_FAIL:
      return { ...state, token: '' };
    case LOGOUT:
      return { ...state, token: '' };
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
