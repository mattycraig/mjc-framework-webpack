// -----------------------------------------------------------------|
// COPY TASKS
// -----------------------------------------------------------------|

export default (gulp, config, development, production) => {

	// COPY:ROOT
	// --------------------------------------|
	gulp.task('copy:root', () => {
		return gulp.src(config.copy.src.root)
			.pipe(development(gulp.dest(config.copy.dest.root.dev)))
			.pipe(production(gulp.dest(config.copy.dest.root.prod)));
	});

	// COPY:FONTS:NPM
	// --------------------------------------|
	gulp.task('copy:fonts:npm', () => {
		return gulp.src(config.copy.src.fonts.npm)
			.pipe(development(gulp.dest(config.copy.dest.fonts.dev)))
			.pipe(production(gulp.dest(config.copy.dest.fonts.prod)));
		console.log('test');
	});

	// COPY:FONTS:APP
	// --------------------------------------|
	gulp.task('copy:fonts:app', () => {
		return gulp.src(config.copy.src.fonts.app)
			.pipe(development(gulp.dest(config.copy.dest.fonts.dev)))
			.pipe(production(gulp.dest(config.copy.dest.fonts.prod)));
	});

	// COPY
	// --------------------------------------|
	gulp.task('copy', ['copy:root', 'copy:fonts:npm', 'copy:fonts:app']);
};
