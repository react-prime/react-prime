const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	name: 'client',
	entry: [
		path.resolve(__dirname, 'src'),
	],
	output: {
		path: path.resolve(__dirname, 'dist/public'),
		filename: 'bundle.js',
		publicPath: '/dist/public',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader?modules!postcss-loader'
				),
			},
			{ test: /\.svg$/, loader: 'raw-loader' },
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			app: path.resolve(__dirname, './src/app'),
			ducks: path.resolve(__dirname, './src/app/ducks'),
			sagas: path.resolve(__dirname, './src/app/sagas'),
			components: path.resolve(__dirname, './src/app/components'),
			server: path.resolve(__dirname, './src/server'),
		},
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false,
			},
		}),
		new ExtractTextPlugin('style.css', { allChunks: true }),
	],
	postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
	devtool: 'source-map',
};
