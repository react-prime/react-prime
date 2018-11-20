import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as appReducers from 'ducks';

let middleware = applyMiddleware(thunk);
const reducers = combineReducers({ ...appReducers });

if (__DEV__ && typeof window.devToolsExtension === 'function') {
  middleware = compose(middleware, window.devToolsExtension());
}

export default createStore(reducers, middleware);
