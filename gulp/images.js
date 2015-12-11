// -----------------------------------------------------------------|
// IMAGES TASKS
// -----------------------------------------------------------------|

export default (gulp, $, config) => {

	// IMAGES
	// --------------------------------------|
	gulp.task('images', () => {
		return gulp.src(config.images.src)
			.pipe($.imagemin({
				progressive: true,
				interlaced: true,
				svgoPlugins: [{
					cleanupIDs: false
				}]
			}))
			.on('error', function(err){ console.log(err); this.end; })
			.pipe(gulp.dest(config.images.dest));
	});
};
