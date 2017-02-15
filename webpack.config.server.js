const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./webpack.config');

module.exports = {
	name: 'server',
	devtool: 'source-map',
	target: 'node',
	node: { __dirname: true },
	externals: [nodeExternals()],
	entry: ['./src/server/index.js'],
	output: {
		path: webpackConfig.output.path,
		filename: 'server.js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.css$/, loader: 'isomorphic-style-loader!css-loader?modules!postcss-loader' },
			{ test: /\.svg$/, loader: 'babel-loader!svg-react-loader' },
			{
				test: /^.*fonts\/.*\.(ttf|eot|woff(2)?|svg)(\?[a-z0-9=&.]+)?(#.+)?$/,
				loader: 'file-loader',
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'url-loader?limit=10000&name=images/[name].[ext]',
			},
		],
	},
	postcss: webpackConfig.postcss,
	resolve: webpackConfig.resolve,
};
