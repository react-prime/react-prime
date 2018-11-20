/* eslint 'global-require': 0 */
import React from 'react';
import ReactDOM from 'react-dom';

if ('serviceWorker' in navigator && !__DEV__) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (!__PROD__) {
          console.info(`Service Worker registered! Scope: ${registration.scope}`);
        }
      }).catch((err) => {
        if (!__PROD__) {
          console.error(`Service Worker registration failed: ${err}`);
        }
      });
  });
}

const render = () => {
  const Root = require('app/components/Root').default;
  ReactDOM.render(<Root />, document.getElementById('app'));
};

if (__DEV__ && module.hot) {
  module.hot.accept('./app/components/Root', render);
}

render();
