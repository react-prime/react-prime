const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./webpack.config');
const globals = require('./src/config/globals');

module.exports = {
    name: 'server',
    devtool: 'source-map',
    target: 'node',
    node: { __dirname: true },
    externals: [nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ })],
    entry: ['./src/server/index.js'],
    output: {
        path: webpackConfig.output.path,
        filename: 'server.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                loader: 'css-loader/locals?modules!postcss-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                include: /node_modules/,
            },
            { test: /\.svg$/, loader: 'babel-loader!svg-react-loader' },
            {
                test: /^.*fonts\/.*\.(ttf|eot|woff(2)?|svg)(\?[a-z0-9=&.]+)?(#.+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(globals('server')),
    ],
    resolve: webpackConfig.resolve,
};
