/* eslint 'global-require': 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { SSR } from 'config';

const render = () => {
    const Root = require('app/components/Root').default;
    const node = document.getElementById('app');

    if (SSR && !__DEV__) {
        ReactDOM.hydrate(<Root />, node);
    } else {
        ReactDOM.render(<Root />, node);
    }
};

if (__DEV__ && module.hot) {
    module.hot.accept('./app/components/Root', render);
}

render();
