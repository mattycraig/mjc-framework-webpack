// -----------------------------------------------------------------|
// VIEWS TASKS
// -----------------------------------------------------------------|

export default (gulp, $, reload, config, development, production) => {

	// JADE OPTIONS
	// --------------------------------------|
	let getLocals = require('../app/jade/_locals.json');
	let optsJade = {
		pretty: true,
		basedir: 'app/jade',
		locals: getLocals
	};

	// HTML PRETTIFY OPTIONS
	// --------------------------------------|
	let optsPretty = {
		indent_with_tabs: true,
		indent_inner_html: false,
		preserve_newlines: true,
		indent_scripts: 'normal',
		unformatted: ['sub', 'sup', 'b', 'em', 'u', 'script']
	};

	// VIEWS
	// --------------------------------------|
	gulp.task('views', () => {
		return gulp.src(config.views.src.dev)
			.pipe(development($.changed('.tmp', {extension: '.html'})))
			.pipe(development($.if(global.isWatching, $.cached('jade'))))
			.pipe(development($.jadeInheritance({basedir: 'app/jade'})))
			.pipe($.filter(config.views.src.filter))
			.pipe($.jade(optsJade))
			.pipe($.prettify(optsPretty))
			.pipe(development(gulp.dest(config.views.dest.dev)))
			.pipe(development(reload({stream: true})))
			.pipe(production(gulp.dest(config.views.dest.prod)));
	});

	gulp.task('views:watch', () => {
		global.isWatching = true;
	});
};
