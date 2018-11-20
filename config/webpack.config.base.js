const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const baseConfig = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[hash].js',
    path: paths.resolveRoot('dist'),
    publicPath: '/',
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
            loader: '@svgr/webpack',
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
            loader: 'url-loader?limit=10000&name=static/images/[hash].[ext]',
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
          /\.html$/,
          /\.ejs$/,
        ],
        loader: 'file-loader',
        options: { name: 'static/[name].[ext]' },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin(['./public']),
    new HtmlWebpackPlugin({
      template: paths.resolveSrc('template.ejs'),
      filename: 'index.html',
      chunksSortMode: 'none',
    }),
  ],
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
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      app: paths.resolveSrc(),
      common: paths.resolveSrc('components/common'),
      components: paths.resolveSrc('components'),
      config: paths.resolveSrc('config'),
      ducks: paths.resolveSrc('ducks'),
      fonts: paths.resolveSrc('static/fonts'),
      images: paths.resolveSrc('static/images'),
      modules: paths.resolveSrc('components/modules'),
      services: paths.resolveSrc('services'),
      styles: paths.resolveSrc('styles'),
      vectors: paths.resolveSrc('static/vectors'),
    },
  },
};

const merge = (...config) => webpackMerge(baseConfig, ...config);

module.exports = merge;
