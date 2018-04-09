const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const globals = require('./src/config/globals');
const merge = require('./webpack.config.common');

const prodConfig = {
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, 'src')],
    },
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
};

const serverConfig = {
    target: 'node',
    node: { __dirname: true },
    externals: [nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ })],
    entry: { server: './src/server/index.js' },
    module: { rules: [{ test: /\.css$/, loader: 'css-loader' }] },
    plugins: [new webpack.DefinePlugin(globals('server'))],
};

module.exports = [merge(prodConfig), merge(serverConfig)];
