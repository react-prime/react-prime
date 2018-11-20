const webpack = require('webpack');
const { GenerateSW } = require('workbox-webpack-plugin');
const globals = require('./globals');
const merge = require('./webpack.config.base');
const paths = require('./paths');

const prodConfig = {
  name: 'client',
  entry: { app: ['@babel/polyfill', paths.resolveSrc('app')] },
  plugins: [
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
