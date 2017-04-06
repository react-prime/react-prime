import { combineReducers, createStore } from 'redux';
import * as appReducers from 'app/ducks';

let middleware = null;

if (__DEV__ && __CLIENT__ && typeof window.devToolsExtension === 'function') {
    middleware = window.devToolsExtension();
}

export default createStore(combineReducers({
    ...appReducers,
}), middleware);
