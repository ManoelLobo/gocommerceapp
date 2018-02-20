import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // Saga
  const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  // Store
  const createAdequateStore = __DEV__ ? console.tron.createStore : createStore;
  const store = createAdequateStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
