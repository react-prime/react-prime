const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { GenerateSW } = require('workbox-webpack-plugin');
const globals = require('./src/config/globals');
const merge = require('./webpack.config.base');

const prodConfig = {
  name: 'client',
  entry: { app: ['@babel/polyfill', path.resolve(__dirname, 'src/app')] },
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

const serverConfig = {
  name: 'server',
  entry: { server: [path.resolve(__dirname, 'src/server')] },
  target: 'node',
  node: { __dirname: true },
  externals: [nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ })],
  plugins: [new webpack.DefinePlugin(globals)],
};

module.exports = [merge(prodConfig), serverConfig];
