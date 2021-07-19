import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import promiseMiddleware from './promise-middleware';
import createRootReducer from './reducer';

const getMiddleware = () => {
  return applyMiddleware(promiseMiddleware/*, createLogger()*/)
};

export const store = createStore(
  createRootReducer(), composeWithDevTools(getMiddleware()));
