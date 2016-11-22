// -----------------------------------------------------------------|
// CLEAN TASKS
// -----------------------------------------------------------------|

export default (gulp, $, config) => {

	let clean = (name, paths) => {
		gulp.task(name, require('del').bind(null, paths));
	}

	// CLEAN TMP/DIST
	// --------------------------------------|
	clean('clean', config.clean.default);

	// CLEAN CSS
	// --------------------------------------|
	clean('clean:styles', config.clean.styles);

	// CLEAN JS
	// --------------------------------------|
	clean('clean:scripts', config.clean.scripts);

	// CLEAN VIEWS
	// --------------------------------------|
	clean('clean:views', config.clean.views);
};
