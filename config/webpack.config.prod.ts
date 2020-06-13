import * as webpack from 'webpack';
import { GenerateSW } from 'workbox-webpack-plugin';

import globals from './globals';
import { merge } from './webpack.config.base';
import pkg from '../package.json';

const prodConfig = {
  name: 'client',
  plugins: [
    new webpack.DefinePlugin(globals),
    new GenerateSW({
      cacheId: pkg.name,
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

module.exports = merge(prodConfig);
