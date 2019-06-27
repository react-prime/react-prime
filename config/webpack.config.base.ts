import path from 'path';
import * as webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpackMerge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const baseConfig: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[hash].js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /external/,
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
          {
            loader: '@svgr/webpack',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        oneOf: [
          {
            resourceQuery: /external/,
            loader: 'file-loader',
            options: {
              name: 'static/[name].[ext]',
            },
          },
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/images/[hash].[ext]',
            },
          },
        ],
      },
      {
        exclude: [
          /\.[tj]sx?$/,
          /\.css$/,
          /\.svg$/,
          /\.(jpe?g|png|gif)$/i,
          /\.json$/,
          /\.html$/,
          /\.ejs$/,
        ],
        loader: 'file-loader',
        options: { name: 'static/[name].[ext]' },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin(['./public']),
    new HtmlWebpackPlugin({
      template: path.resolve('src/template.ejs'),
      filename: 'index.html',
      chunksSortMode: 'none',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
};

export default baseConfig;

export const merge = (...config: webpack.Configuration[]) => webpackMerge(baseConfig, ...config);
