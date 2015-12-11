// -----------------------------------------------------------------|
// GULPFILE.BABEL.JS
// -----------------------------------------------------------------|
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import webpackStream from 'webpack-stream';

const reload = browserSync.reload;
const $ = gulpLoadPlugins();
const config = require('./gulp/config.json');

// ENVIRONMENTS
// --------------------------------------|
const development = $.environments.development;
const production = $.environments.production;

// TASKS
// --------------------------------------|
import clean from './gulp/clean';
import styles from './gulp/styles';
import views from './gulp/views';
import webpack from './gulp/webpack';
import images from './gulp/images';
import copy from './gulp/copy';
import serve from './gulp/serve';

clean(gulp, $, config);
styles(gulp, $, reload, config, development, production);
views(gulp, $, reload, config, development, production);
webpack(gulp, $, reload, config, development, production, webpackStream);
images(gulp, $, config);
copy(gulp, config, development, production);
serve(gulp, $, browserSync, reload);

// DEVELOPMENT
// --------------------------------------|
gulp.task('set:dev', development.task);
gulp.task('dev', ['set:dev', 'clean'], () => {
	gulp.start('serve');
});

// PRODUCTION
// --------------------------------------|
gulp.task('set:prod', production.task);
gulp.task('prod', ['set:prod', 'clean'], () => {
	gulp.start('build');
});

// DEFAULT
// --------------------------------------|
gulp.task('default', () => {
	gulp.start('prod');
});

// BUILD
// --------------------------------------|
gulp.task('build', ['styles', 'views', 'webpack', 'copy', 'images']);
