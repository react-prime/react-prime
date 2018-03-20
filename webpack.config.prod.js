const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.config');
const globals = require('./src/config/globals');

module.exports = {
    name: 'client',
    devtool: 'cheap-source-map',
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, 'src')],
        vendor: webpackConfig.entry.vendor,
    },
    output: {
        path: webpackConfig.output.path,
        filename: webpackConfig.output.filename,
        publicPath: '/',
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
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
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    ],
    resolve: webpackConfig.resolve,
};
