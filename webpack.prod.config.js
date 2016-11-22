const webpack = require('webpack');
const path = require('path');

module.exports = {
	output: {
		filename: 'bundle.js'
	},
	module: {
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
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: {
				except: ['$super', '$', 'exports', 'require', 'angular']
			}
		})
	],
	resolve: {
		root: path.resolve(__dirname),
		extensions: ['', '.js']
	}
};
