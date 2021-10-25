import * as webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { merge } from './webpack.config.base';
import globals from './globals';

const devConfig: webpack.Configuration = merge({
  mode: 'development',
  target: 'web',
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin(globals()),
  ],
  devServer: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3000,
    historyApiFallback: true,
  },
  stats: 'minimal',
});

module.exports = devConfig;
