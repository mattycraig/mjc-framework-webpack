var webpack = require('webpack');
var path = require('path');

module.exports = {
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: [/gulp/, /test/, /node_modules/],
			loader: 'babel'
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
			}
		})
	],
	resolve: {
		root: path.resolve(__dirname),
		alias: {
			helpers: 'app/js/helpers',
			vendor: 'app/js/vendor',
			modernizr: 'app/js/modernizr',
			bootstrap: 'bootstrap-sass/assets/javascripts/bootstrap',
			jq: 'app/js/jq',
			ng: 'app/js/ng'
		}
	}
};
