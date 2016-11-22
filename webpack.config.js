const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'sourcemap',
	output: {
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [{
			test: /\.js$/,
			exclude: [/gulp/, /test/, /node_modules/],
			loader: 'eslint-loader'
		}],
		loaders: [{
			test: /\.js$/,
			exclude: [/gulp/, /test/, /node_modules/],
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	],
	resolve: {
		root: path.resolve(__dirname),
		extensions: ['', '.js']
	}
};
