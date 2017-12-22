import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import compress from 'compression';
import { port, SSR } from 'config';
import renderFullPage from 'server/helpers/renderFullPage';
import ServerRoot from 'server/helpers/ServerRoot';

const app = express();
app.use(compress());
app.use(express.static(path.resolve(__dirname, '../../dist')));

const sheet = new ServerStyleSheet();
app.use((req, res) => {
    const html = SSR
        ? renderToString(<ServerRoot location={req.url} sheet={sheet.instance} />)
        : ' ';

    const styleTags = sheet.getStyleTags();
    res.status(200).send(renderFullPage({ html, styleTags }));
});

app.listen(port, () => {
    console.info(`Listening on port ${port}`);
});
