import React from 'react';
import store from 'app/store';
import routes from 'app/routes';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import 'styles/global.css';

const Root = () => (
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>
);

export default Root;
