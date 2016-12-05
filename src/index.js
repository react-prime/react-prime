import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'app/components/Root';

const APP_NODE = document.getElementById('app');

ReactDOM.render((
	<Root />
), APP_NODE);

if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./app/components/Root', () => {
		const NextRoot = require('./app/components/Root').default;
		ReactDOM.render((
			<NextRoot />
		), APP_NODE);
	});
}
