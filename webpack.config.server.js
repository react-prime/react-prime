const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CSSnext = require('postcss-cssnext');
const CSSimport = require('postcss-import');

module.exports = {
	name: 'server',
	target: 'node',
	eval: 'source-map',
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
		publicPath: '/',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.svg$/, loader: 'url-loader' },
			{ test: /\.css$/, loader: 'isomorphic-style-loader!css-loader?modules!postcss-loader' },
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'url-loader?limit=10000&name=images/[name].[ext]',
			},
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
			common: path.resolve(__dirname, './src/components/common'),
			components: path.resolve(__dirname, './src/app/components'),
			config: path.resolve(__dirname, './src/config'),
			ducks: path.resolve(__dirname, './src/app/ducks'),
			fonts: path.resolve(__dirname, './src/app/static/fonts'),
			images: path.resolve(__dirname, './src/app/static/images'),
			helpers: path.resolve(__dirname, './src/app/helpers'),
			modules: path.resolve(__dirname, './src/components/modules'),
			sagas: path.resolve(__dirname, './src/app/sagas'),
			server: path.resolve(__dirname, './src/server'),
			styles: path.resolve(__dirname, './src/app/styles'),
			vectors: path.resolve(__dirname, './src/app/static/vectors'),
		},
	},
};
