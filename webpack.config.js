const path = require('path');
const HappyPack = require('happypack');
const webpack = require('webpack');
const CSSnext = require('postcss-cssnext');
const CSSimport = require('postcss-import');

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
				query: { presets: ['react-hmre'] },
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss-loader',
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				loader: 'style-loader!css-loader',
			},
			{ test: /\.svg$/, loader: 'raw-loader' },
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HappyPack({ loaders: ['babel'] }),
	],
	postcss: [
		CSSimport({
			path: ['./src/app/styles'],
		}),
		CSSnext,
	],
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
	devtool: 'eval',
};
