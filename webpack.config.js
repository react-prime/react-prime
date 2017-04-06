const path = require('path');
const HappyPack = require('happypack');
const webpack = require('webpack');
const cssNext = require('postcss-cssnext');
const cssImport = require('postcss-import');
const globals = require('./src/config/globals');

module.exports = {
    name: 'client',
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?reload=true&noInfo=true',
        path.resolve(__dirname, 'src'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'happypack/loader',
                include: path.resolve(__dirname, 'src'),
                query: { presets: ['react-hmre'] },
            },
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss-loader',
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.svg$/,
                loader: 'babel-loader!svg-react-loader',
            },
            {
                test: /^.*fonts\/.*\.(ttf|eot|woff(2)?|svg)(\?[a-z0-9=&.]+)?(#.+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=10000',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HappyPack({ loaders: ['babel'] }),
        new webpack.DefinePlugin(globals),
    ],
    postcss: [
        cssImport({
            path: ['./src/app/styles'],
        }),
        cssNext,
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            app: path.resolve(__dirname, './src/app'),
            common: path.resolve(__dirname, './src/app/components/common'),
            components: path.resolve(__dirname, './src/app/components'),
            config: path.resolve(__dirname, './src/config'),
            ducks: path.resolve(__dirname, './src/app/ducks'),
            fonts: path.resolve(__dirname, './src/app/static/fonts'),
            images: path.resolve(__dirname, './src/app/static/images'),
            helpers: path.resolve(__dirname, './src/app/helpers'),
            modules: path.resolve(__dirname, './src/app/components/modules'),
            server: path.resolve(__dirname, './src/server'),
            styles: path.resolve(__dirname, './src/app/styles'),
            vectors: path.resolve(__dirname, './src/app/static/vectors'),
        },
    },
};
