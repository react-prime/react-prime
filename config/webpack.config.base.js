const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const baseConfig = {
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
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
      template: paths.resolveSrc('app/template.ejs'),
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
      app: paths.resolveSrc('app'),
      common: paths.resolveSrc('app/components/common'),
      components: paths.resolveSrc('app/components'),
      config: paths.resolveSrc('app/config'),
      ducks: paths.resolveSrc('app/ducks'),
      fonts: paths.resolveSrc('app/static/fonts'),
      images: paths.resolveSrc('app/static/images'),
      modules: paths.resolveSrc('app/components/modules'),
      server: paths.resolveSrc('server'),
      services: paths.resolveSrc('app/services'),
      styles: paths.resolveSrc('app/styles'),
      vectors: paths.resolveSrc('app/static/vectors'),
    },
  },
};

const merge = (...config) => webpackMerge(baseConfig, ...config);

module.exports = merge;
