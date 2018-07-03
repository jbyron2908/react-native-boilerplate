import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import counter from './counter';


export default combineReducers({
  counter,
  form: formReducer,
});
