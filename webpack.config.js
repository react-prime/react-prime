const path = require('path');
const webpack = require('webpack');
const globals = require('./src/config/globals');

module.exports = {
    name: 'client',
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true&noInfo=true',
            'babel-polyfill',
            path.resolve(__dirname, 'src'),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin(globals('client')),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            app: path.resolve(__dirname, './src/app'),
            common: path.resolve(__dirname, './src/app/components/common'),
            components: path.resolve(__dirname, './src/app/components'),
            config: path.resolve(__dirname, './src/config'),
            ducks: path.resolve(__dirname, './src/app/ducks'),
            fonts: path.resolve(__dirname, './src/app/static/fonts'),
            images: path.resolve(__dirname, './src/app/static/images'),
            modules: path.resolve(__dirname, './src/app/components/modules'),
            server: path.resolve(__dirname, './src/server'),
            services: path.resolve(__dirname, './src/app/services'),
            styles: path.resolve(__dirname, './src/app/styles'),
            vectors: path.resolve(__dirname, './src/app/static/vectors'),
        },
    },
};
