const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const globals = require('./src/config/globals');
const merge = require('./webpack.config.base');

const prodConfig = {
    name: 'client',
    entry: { app: ['babel-polyfill', path.resolve(__dirname, 'src')] },
    plugins: [new webpack.DefinePlugin(globals('client'))],
};

const serverConfig = {
    name: 'server',
    entry: { server: [path.resolve(__dirname, 'src/server')] },
    module: { rules: [{ test: /\.css$/, loader: 'css-loader' }] },
    plugins: [new webpack.DefinePlugin(globals('server'))],
    target: 'node',
    node: { __dirname: true },
    externals: [nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ })],
};

module.exports = [merge(prodConfig), merge(serverConfig)];
