const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const globals = require('./globals');
const merge = require('./webpack.config.base');
const paths = require('./paths');

const prodConfig = {
  name: 'client',
  entry: { app: ['@babel/polyfill', paths.resolveSrc()] },
  plugins: [
    new CopyWebpackPlugin([{ from: paths.resolveRoot('server/index.js'), to: 'server.js' }]),
    new webpack.DefinePlugin(globals),
    new GenerateSW({
      cacheId: 'prime',
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

module.exports = merge(prodConfig);
