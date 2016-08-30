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
			},
			mangle: {
				except: ['$super', '$', 'exports', 'require', 'angular']
			}
		})
	],
	resolve: {
		root: path.resolve(__dirname),
		alias: {
			helpers: 'app/js/etc/helpers',
			vendor: 'app/js/etc/vendor',
			modernizr: 'app/js/etc/modernizr',
			bootstrap: 'bootstrap/dist/js',
			jq: 'app/js/jquery/base',
			ng: 'app/js/angular/base'
		}
	}
};
