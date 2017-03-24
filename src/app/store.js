import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call } from 'redux-saga/effects';
import * as appReducers from 'app/ducks';
import * as appSagas from 'app/sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV !== 'production' && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
        middleware = compose(middleware, window.devToolsExtension());
    }
}

export default createStore(combineReducers({
    ...appReducers,
}), middleware);

function *combineSagas() {
    yield Object.keys(appSagas).map(saga => call(appSagas[saga]));
}

sagaMiddleware.run(combineSagas);
