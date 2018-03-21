const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const globals = require('./src/config/globals');

module.exports = {
    name: 'client',
    devtool: 'cheap-source-map',
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, 'src')],
    },
    module: webpackConfig.module,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    resolve: webpackConfig.resolve,
};
