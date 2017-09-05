const webpack = require('webpack');
const path = require('path');

module.exports = {
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: [/gulp/, /test/, /node_modules/],
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		}),
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
		modules: [
			path.resolve(__dirname),
			'node_modules'
		]
	}
};
