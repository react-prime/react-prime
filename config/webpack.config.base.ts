import path from 'path';
import * as webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import webpackMerge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

// Remove reference to webpack config tsconfig.json
delete process.env.TS_NODE_PROJECT;

const baseConfig: webpack.Configuration = {
  mode: 'production',
  target: 'browserslist',
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[name].[chunkhash].js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  entry: path.resolve('src'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /external/,
            type: 'asset/inline',
          },
          {
            use: ['@svgr/webpack'],
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        oneOf: [
          {
            resourceQuery: /external/,
            type: 'asset/inline',
          },
          {
            type: 'asset/resource',
            generator: {
              filename: 'static/images/[name].[ext]',
            },
          },
        ],
      },
      // Fixes a @babel/runtime resolve issue https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
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
        type: 'asset/resource',
        generator: {
          filename: 'static/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './public' }],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/template.ejs'),
      filename: 'index.html',
      chunksSortMode: 'auto',
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

type WebpackMergeType = (...config: webpack.Configuration[]) => webpack.Configuration;

export const merge: WebpackMergeType = (...config) => webpackMerge(baseConfig, ...config);
