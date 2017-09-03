import store from 'app/store';
import express from 'express';
import React from 'react';
import path from 'path';
import { port } from 'config';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import renderFullPage from 'server/helpers/renderFullPage';
import compress from 'compression';
import App from 'components/App';

const app = express();
app.use(compress());
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.use((req, res) => {
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </Provider>,
    );

    res.status(200).send(renderFullPage({ html }));
});

app.listen(port, () => {
    console.info(`Listening on port ${port}`);
});
