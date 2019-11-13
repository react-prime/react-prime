const webpack = require('webpack');
const merge = require('./webpack.config.base');
const globals = require('./globals');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
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
