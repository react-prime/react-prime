import * as webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { merge, WebpackConfig } from './webpack.config.base';
import globals from './globals';

const devConfig: WebpackConfig = merge({
  mode: 'development',
  target: 'web',
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals()),
  ],
  devServer: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3000,
    hot: true,
    stats: 'minimal',
    historyApiFallback: true,
  },
});

module.exports = devConfig;
