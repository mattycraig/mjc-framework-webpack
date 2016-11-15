// -----------------------------------------------------------------|
// SERVE TASKS
// -----------------------------------------------------------------|

export default (gulp, $, browserSync, reload) => {

	// DEVELOPMENT SERVE
	// --------------------------------------|
	gulp.task('serve', ['styles', 'views:watch', 'views', 'webpack', 'copy'], () => {
		browserSync({
			notify: false,
			port: 9000,
			server: {
				baseDir: ['.tmp', 'app']
			}
		});

		// Watch files
		gulp.watch([
			'app/images/**/*'
		]).on('change', reload);

		// Watch scss
		gulp.watch([
			'app/scss/**/*.scss'
		], ['styles']);

		// Watch scripts
		gulp.watch([
			'app/js/**/*.js'
		], ['webpack']);

		// Watch pug + locals
		gulp.watch([
			'app/pug/**/*.pug'
		], ['views']);

		// Watch JSON content
		gulp.watch([
			'app/content/**/*.json',
		], ['copy:content']).on('change', reload);
	});

	// PRODUCTION SERVE
	// --------------------------------------|
	gulp.task('serve:prod', ['set:prod', 'clean', 'styles', 'views', 'webpack', 'copy', 'images'], () => {
		browserSync({
			notify: false,
			port: 9000,
			server: {
				baseDir: ['dist']
			}
		});
	});
};
