/* eslint-disable max-len,no-underscore-dangle,no-undef,global-require,global-require */
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import { AsyncStorage } from 'react-native';
import epics from '../epics';
import sagas from '../sagas';
import reducers from '../reducers';


export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    epicMiddleware,
    sagaMiddleware,
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

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  const persistor = persistStore(store);

  epicMiddleware.run(epics);
  sagaMiddleware.run(sagas);

  return { store, persistor };
}
