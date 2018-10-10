const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.jsx?$/
        },
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        oneOf: [
          {
            resourceQuery: /external/,
            loader: 'file-loader?name=static/[name].[ext]',
          },
          {
            loader: 'url-loader?limit=10000&name=static/images/[hash].[ext]',
          },
        ],
      },
      {
        exclude: [
          /\.jsx?$/,
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/server/template.ejs'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, './src/app/static/favicon.ico'),
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
    extensions: ['*', '.js', '.jsx'],
    alias: {
      app: path.resolve(__dirname, './src/app'),
      common: path.resolve(__dirname, './src/app/components/common'),
      components: path.resolve(__dirname, './src/app/components'),
      config: path.resolve(__dirname, './src/config'),
      ducks: path.resolve(__dirname, './src/app/ducks'),
      fonts: path.resolve(__dirname, './src/app/static/fonts'),
      images: path.resolve(__dirname, './src/app/static/images'),
      modules: path.resolve(__dirname, './src/app/components/modules'),
      server: path.resolve(__dirname, './src/server'),
      services: path.resolve(__dirname, './src/app/services'),
      styles: path.resolve(__dirname, './src/app/styles'),
      vectors: path.resolve(__dirname, './src/app/static/vectors'),
    },
  },
};

const merge = (...config) => webpackMerge(baseConfig, ...config);

module.exports = merge;
