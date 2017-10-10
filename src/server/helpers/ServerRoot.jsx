import React from 'react';
import PT from 'prop-types';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import store from 'app/store';
import App from 'components/App';

const ServerRoot = ({ location }) => (
    <Provider store={store}>
        <StaticRouter location={location} context={{}}>
            <App />
        </StaticRouter>
    </Provider>
);

ServerRoot.propTypes = {
    location: PT.string,
};

export default ServerRoot;
