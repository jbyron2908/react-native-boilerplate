/* eslint-disable max-len,no-underscore-dangle,no-undef,global-require,global-require */
import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';

import reducers from '../reducers';
import epics from '../epics';

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [
    epicMiddleware,
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
    reducers,
    fromJS(initialState),
    composeEnhancers(...enhancers),
  );

  epicMiddleware.run(epics);

  return store;
}
