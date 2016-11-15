// -----------------------------------------------------------------|
// VIEWS TASKS
// -----------------------------------------------------------------|

import fs from 'fs';
import path from 'path';

let dirPath = 'app/pug';
let fileType = '.pug';
let files = [];

fs.readdir(dirPath, function(err, list) {
	if(err) throw err;
	for(var i = 0; i < list.length; i++) {
		if(path.extname(list[i]) === fileType) {
			list[i] = list[i].replace(fileType, '');
			files.push(list[i]);
		}
	}
});

export default (gulp, $, reload, config, development, production) => {

	// JADE OPTIONS
	// --------------------------------------|
	let optsPugDev = {
		pretty: true,
		basedir: 'app/pug',
		data: {
			env: 'development',
			pages: files
		}
	};

	let optsPugProd = {
		pretty: true,
		basedir: 'app/pug',
		data: {
			env: 'production',
			pages: files
		}
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
			.pipe(development($.if(global.isWatching, $.cached('pug'))))
			.pipe(development($.pugInheritance({
				basedir: 'app/pug',
				skip: 'node_modules'
			})))
			.pipe($.filter(config.views.src.filter))
			.pipe(development($.pug(optsPugDev)))
			.pipe(production($.pug(optsPugProd)))
			.pipe($.prettify(optsPretty))
			.pipe(development(gulp.dest(config.views.dest.dev)))
			.pipe(development(reload({stream: true})))
			.pipe(production(gulp.dest(config.views.dest.prod)));
	});

	gulp.task('views:watch', () => {
		global.isWatching = true;
	});
};
