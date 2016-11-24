import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'app/components/Root';

ReactDOM.render((
	<Root />
), document.getElementById('app'));

if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./app/components/Root', () => {
		const NextRoot = require('./app/components/Root').default;
		ReactDOM.render((
			<NextRoot />
		), document.getElementById('app'));
	});
}
