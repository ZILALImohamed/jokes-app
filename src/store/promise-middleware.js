import {ASYNC_END, ASYNC_START} from './common-actions';


const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({type: ASYNC_START, subtype: action.type});

    action.payload.then(
      res => {
        console.log('RESULT', res);
        action.payload = res;
        store.dispatch({type: ASYNC_END, promise: action.payload});
        store.dispatch(action);
      },
      error => {
        console.log('ERROR', error);
        action.error = true;
        action.payload = error.response && error.response.body;
        store.dispatch({type: ASYNC_END, promise: action.payload});
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


export default promiseMiddleware
