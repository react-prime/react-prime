import path from 'path';
import * as webpack from 'webpack';
import { GenerateSW } from 'workbox-webpack-plugin';
import globals from './globals';
import { merge } from './webpack.config.base';
import pjson from '../package.json';

const prodConfig = {
  name: 'client',
  entry: {
    app: ['@babel/polyfill', path.resolve('src')],
  },
  plugins: [
    new webpack.DefinePlugin(globals),
    new GenerateSW({
      cacheId: pjson.name,
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

module.exports = merge(prodConfig);
