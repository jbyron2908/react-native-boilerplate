/* eslint-disable max-len,no-underscore-dangle,no-undef,global-require,global-require */
import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore() {
  const middlewares = [
    thunk,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;

  const initialState = {};

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeEnhancers(...enhancers),
  );

  return store;
}
