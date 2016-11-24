import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as appReducers from 'app/reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from 'app/sagas';

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
	routing: routerReducer,
}), middleware);

sagaMiddleware.run(sagas);
