import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

sagaMiddleware.run(rootSaga);
