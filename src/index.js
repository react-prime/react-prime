import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
    const Root = require('app/components/Root').default;
    ReactDOM.render((
        <Root />
    ), document.getElementById('app'));
};

if (__DEV__ && module.hot) {
    module.hot.accept('./app/components/Root', render);
}

render();
