const path = require('path');
const webpack = require('webpack');
const merge = require('./webpack.config.base');
const globals = require('./src/config/globals');

const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true&noInfo=true',
            'babel-polyfill',
            path.resolve(__dirname, 'src'),
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(globals('client')),
    ],
};

module.exports = merge(devConfig);
