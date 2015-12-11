// -----------------------------------------------------------------|
// WEBPACK TASKS
// -----------------------------------------------------------------|

export default (gulp, $, reload, config, development, production, webpackStream) => {

	// WEBPACK
	// --------------------------------------|
	gulp.task('webpack', () => {
		return gulp.src(config.webpack.src)
			.pipe(development(webpackStream(require('../webpack.config'))))
			.pipe(development(gulp.dest(config.webpack.dest.dev)))
			.pipe(development(reload({stream: true})))
			.pipe(production(webpackStream(require('../webpack.prod.config'))))
			.pipe(production(gulp.dest(config.webpack.dest.prod)));
	});
};
