const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./webpack.config');
const globals = require('./src/config/globals');

module.exports = {
    name: 'server',
    devtool: 'cheap-source-map',
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
            { test: /\.css$/, loader: 'css-loader' },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        resourceQuery: /external/,
                        loader: 'url-loader?limit=10000',
                    },
                    {
                        loader: 'babel-loader!svg-react-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                oneOf: [
                    {
                        resourceQuery: /external/,
                        loader: 'file-loader?name=static/[name].[ext]',
                    },
                    {
                        loader: 'url-loader?limit=10000',
                    },
                ],
            },
            {
                exclude: [
                    /\.jsx?$/,
                    /\.css$/,
                    /\.svg$/,
                    /\.(jpe?g|png|gif)$/i,
                    /\.json$/,
                ],
                loader: 'file-loader',
                options: { name: 'static/[name].[ext]' },
            },
        ],
    },
    plugins: [new webpack.DefinePlugin(globals('server'))],
    resolve: webpackConfig.resolve,
};
