const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CSSnext = require('postcss-cssnext');
const CSSimport = require('postcss-import');

module.exports = {
	name: 'server',
	target: 'node',
	node: {
		__dirname: true,
	},
	externals: [nodeExternals()],
	entry: [
		'./src/server/index.js',
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
		publicPath: '/dist',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.svg$/, loader: 'raw-loader' },
			{ test: /\.css$/, loader: 'isomorphic-style-loader!css-loader?modules!postcss-loader' },
		],
	},
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
			styles: path.resolve(__dirname, './src/server'),
		},
	},
};
