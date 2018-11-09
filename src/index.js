/* eslint 'global-require': 0 */
import React from 'react';
import ReactDOM from 'react-dom';

// Register service worker
if (!__DEV__) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          if (!__PROD__) {
            console.info('SW registered: ', registration);
          }
        }).catch((error) => {
          if (!__PROD__) {
            console.error('SW registration failed: ', error);
          }
        });
    });
  }
}

const render = () => {
  const Root = require('app/components/Root').default;
  ReactDOM.render(<Root />, document.getElementById('app'));
};

if (__DEV__ && module.hot) {
  module.hot.accept('./app/components/Root', render);
}

render();
