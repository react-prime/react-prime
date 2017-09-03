import React from 'react';
import store from 'app/store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import 'app/static/favicon.ico';
import 'styles/global.css';
import App from './App';

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
);

export default Root;
