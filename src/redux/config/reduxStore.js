/* eslint-disable max-len,no-underscore-dangle,no-undef,global-require,global-require */
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import logics from '../logics';
import reducers from '../reducers';

const configureStore = () => {
  const logicMiddleware = createLogicMiddleware(logics);

  const middlewares = [
    logicMiddleware,
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
    initialState,
    composeEnhancers(...enhancers),
  );

  return { store };
};

const reduxStore = configureStore();

export const { store } = reduxStore;

export default reduxStore;
