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
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    hot: true,
    stats: 'minimal',
    historyApiFallback: true,
  },
};

module.exports = merge(devConfig);
