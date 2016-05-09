// -----------------------------------------------------------------|
// STYLES TASKS
// -----------------------------------------------------------------|

export default (gulp, $, reload, config, development, production) => {

	// LIBSASS OPTIONS
	// --------------------------------------|
	let optsSass = {
		outputStyle: 'expanded',
		precision: 10,
		includePaths: [
			'.',
			'app/scss/',
			'node_modules/',
			'node_modules/bourbon/app/assets/stylesheets/',
			'node_modules/bootstrap-sass/assets/stylesheets/',
			'node_modules/animatewithsass/'
		]
	};

	// AUTOPREFIXER OPTIONS
	// --------------------------------------|
	let optsAutoprefixer = {
		browsers: [
			'> 1%',
			'last 2 versions',
			'Firefox ESR',
			'Explorer >= 9',
			'Safari >= 6',
			'ExplorerMobile >= 10'
		]
	};

	// POSTCSS OPTIONS
	// --------------------------------------|
	let optsPostCSS = [
		require('autoprefixer')(optsAutoprefixer),
		require('css-mqpacker')
	];

	// STYLES
	// --------------------------------------|
	gulp.task('styles', () => {
		return gulp.src(config.styles.src.scss)
			.pipe($.sassBulkImport())
			.pipe(development($.sourcemaps.init()))
			.pipe($.sass.sync(optsSass))
			.on('error', $.sass.logError)
			.pipe($.postcss(optsPostCSS))
			.pipe(development($.sourcemaps.write('./')))
			.pipe(development(gulp.dest(config.styles.dest.dev)))
			.pipe(development(reload({stream: true})))
			.pipe(production($.cleanCss()))
			.pipe(production(gulp.dest(config.styles.dest.prod)));
	});

	// INDIVIDUAL TASK: STYLES
	// --------------------------------------|
	gulp.task('task:styles', ['clean:styles'], () => {
		return gulp.src(config.styles.src.scss)
			.pipe($.sassBulkImport())
			.pipe($.sass.sync(optsSass))
			.on('error', $.sass.logError)
			.pipe($.postcss(optsPostCSS))
			.pipe($.cleanCss())
			.pipe(gulp.dest(config.styles.dest.prod));
	});
};
