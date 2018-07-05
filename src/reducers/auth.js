import { fromJS } from 'immutable';

// Actions
const LOGIN_SUCCESS = 'reducer/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'reducer/auth/LOGIN_FAIL';
const LOGOUT = 'reducer/auth/LOGOUT';

// Reducer
// TODO: Look token
const logged = false;

const initialState = fromJS({
  logged,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('logged', true);
    case LOGOUT:
      return state.set('logged', false);
    default:
      return state;
  }
}

// Action Creators
export function loginSuccessAction(token) {
  // TODO: Store token
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
  // TODO: Remove token

  return {
    type: LOGOUT,
  };
}
