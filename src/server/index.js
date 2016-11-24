import store from 'app/store';
import getRoutes from 'app/utils/getRoutes';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import renderFullPage from 'server/utils/renderFullPage';

const app = express();

app.use((req, res, next) => {
	const routes = getRoutes();

	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			return next(error);
		}

		if (redirectLocation) {
			return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		}

		if (!renderProps) {
			return res.status(404).send('Not found');
		}

		res.status(200).send(renderFullPage(renderToString(
			<Provider store={store}>
				<RouterContext {...renderProps} />
			</Provider>
		)));
	});
});

app.listen(3000, () => {
	console.info('Listening on port 3000');
});
