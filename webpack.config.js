var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'sourcemap',
	output: {
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [{
			test: /\.js$/,
			exclude: [/gulp/, /test/, /node_modules/],
			loader: 'eslint'
		}],
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
