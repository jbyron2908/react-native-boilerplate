import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import counter from './counter';
import auth from './auth';
import user from './user';


export default combineReducers({
  counter,
  auth,
  user,
  form: formReducer,
});
