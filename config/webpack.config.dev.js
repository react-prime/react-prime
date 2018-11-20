const webpack = require('webpack');
const merge = require('./webpack.config.base');
const globals = require('./globals');
const paths = require('./paths');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true&noInfo=true',
      '@babel/polyfill',
      paths.resolveSrc(),
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals),
  ],
};

module.exports = merge(devConfig);
