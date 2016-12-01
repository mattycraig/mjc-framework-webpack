// -----------------------------------------------------------------|
// COPY TASKS
// -----------------------------------------------------------------|

export default (gulp, config, development, production) => {

	let copy = (name, source, dev, prod) => {
		gulp.task(name, () => {
			return gulp.src(source)
				.pipe(development(gulp.dest(dev)))
				.pipe(production(gulp.dest(prod)));
		});
	}

	// COPY:ROOT
	// --------------------------------------|
	copy('copy:root', config.copy.src.root, config.copy.dest.root.dev, config.copy.dest.root.prod);

	// COPY:CONTENT
	// --------------------------------------|
	copy('copy:content', config.copy.src.content, config.copy.dest.content.dev, config.copy.dest.content.prod);

	// COPY:FONTS:NPM
	// --------------------------------------|
	copy('copy:fonts:npm', config.copy.src.fonts.npm, config.copy.dest.fonts.dev, config.copy.dest.fonts.prod);

	// COPY:FONTS:APP
	// --------------------------------------|
	copy('copy:fonts:app', config.copy.src.fonts.app, config.copy.dest.fonts.dev, config.copy.dest.fonts.prod);

	// COPY
	// --------------------------------------|
	gulp.task('copy', ['copy:root', 'copy:content', 'copy:fonts:npm', 'copy:fonts:app']);
};
