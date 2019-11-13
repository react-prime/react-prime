import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from 'services/registerServiceWorker';

import Root from './components/Root';

if (!__DEV__) registerServiceWorker();
if (__DEV__ && module.hot) module.hot.accept();

ReactDOM.render(<Root />, document.getElementById('app'));
