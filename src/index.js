/* eslint 'global-require': 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { SSR } from 'config';

const render = () => {
  const Root = require('app/components/Root').default;
  ReactDOM[SSR && !__DEV__ ? 'hydrate' : 'render'](<Root />, document.getElementById('app'));
};

if (__DEV__ && module.hot) {
  module.hot.accept('./app/components/Root', render);
}

render();
