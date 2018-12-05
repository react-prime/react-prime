const webpack = require('webpack');
const merge = require('./webpack.config.base');
const globals = require('./globals');
const paths = require('./paths');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: ['@babel/polyfill', paths.resolveSrc()],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals),
  ],
  devServer: {
    hot: true,
    port: process.env.PORT || 3000,
    stats: 'minimal',
    historyApiFallback: true,
  },
};

module.exports = merge(devConfig);
