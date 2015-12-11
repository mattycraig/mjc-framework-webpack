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
			helpers: 'app/js/helpers',
			vendor: 'app/js/vendor',
			modernizr: 'app/js/modernizr',
			bootstrap: 'bootstrap-sass/assets/javascripts/bootstrap',
			jq: 'app/js/jq',
			ng: 'app/js/ng'
		}
	}
};
