const path = require('path');
const HappyPack = require('happypack');
const webpack = require('webpack');

module.exports = {
	name: 'client',
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, 'src'),
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'happypack/loader',
				include: path.resolve(__dirname, 'src'),
				query: {
					presets: ['react-hmre'],
				},
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass'],
			},
			{ test: /\.svg$/, loader: 'raw-loader' },
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HappyPack({
			loaders: [
				'babel',
			],
		}),
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [path.resolve('./src')],
	},
	devtool: 'eval',
};
