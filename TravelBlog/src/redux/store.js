/* Created by Recep May */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import defaultSagas from './sagas';
import creationSaga from './sagas/creationSaga';
import deletionSaga from './sagas/deletionSaga';

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// mounting it on the Store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
export default store;

sagaMiddleware.run(defaultSagas);
sagaMiddleware.run(creationSaga);
sagaMiddleware.run(deletionSaga);