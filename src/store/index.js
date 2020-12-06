import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();
const middleware = [thunk, loggerMiddleware];

export default createStore(
  rootReducer,
  applyMiddleware(...middleware),
);