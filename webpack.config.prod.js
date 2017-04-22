const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.config');
const globals = require('./src/config/globals');

module.exports = {
    name: 'client',
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, 'src'),
    ],
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
                include: path.resolve(__dirname, 'src'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules!postcss-loader',
                }),
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'src'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            { test: /\.svg$/, loader: 'babel-loader!svg-react-loader' },
            {
                test: /^.*fonts\/.*\.(ttf|eot|woff(2)?|svg)(\?[a-z0-9=&.]+)?(#.+)?$/,
                loader: 'file-loader?name=fonts/[hash].[ext]',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=10000&name=images/[hash].[ext]',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    ],
    resolve: webpackConfig.resolve,
};
