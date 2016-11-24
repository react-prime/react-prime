import React from 'react';
import store from 'app/store';
import getRoutes from 'app/utils/getRoutes';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'app/styles/index.scss';

const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
	<Provider store={store}>
		<Router children={getRoutes()} history={history} />
	</Provider>
);

export default Root;
