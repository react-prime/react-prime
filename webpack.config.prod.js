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
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=10000&name=images/[hash].[ext]',
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
