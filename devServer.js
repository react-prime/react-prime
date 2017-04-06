/* eslint no-console: 0 */
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const renderFullPage = require('./src/server/helpers/renderFullPage');

const app = express();
const compiler = webpack(config);

const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true },
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
    res.send(renderFullPage());
});

app.listen(3000, () => {
    console.log('Listening at http://localhost:3000/');
});
