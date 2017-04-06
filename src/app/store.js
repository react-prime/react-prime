import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call } from 'redux-saga/effects';
import * as appReducers from 'app/ducks';
import * as appSagas from 'app/sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

if (__DEV__ && __CLIENT__ && typeof window.devToolsExtension === 'function') {
    middleware = compose(middleware, window.devToolsExtension());
}

export default createStore(combineReducers({
    ...appReducers,
}), middleware);

function *combineSagas() {
    yield Object.keys(appSagas).map(saga => call(appSagas[saga]));
}

sagaMiddleware.run(combineSagas);
