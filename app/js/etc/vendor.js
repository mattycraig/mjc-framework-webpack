//--------------------------------------------|
// VENDOR.JS
//--------------------------------------------|
// Load our vendor plugins

// jQUERY
// ---------------------------------|
require('jquery');

// BOOTSTRAP COMPONENTS
// ---------------------------------|
// require('bootstrap/util');
// require('bootstrap/alert');
// require('bootstrap/button');
// require('bootstrap/carousel');
// require('bootstrap/collapse');
// require('bootstrap/dropdown');
// require('bootstrap/modal');
// require('bootstrap/scrollspy');
// require('bootstrap/tab');
// require('bootstrap/tooltip');
// require('bootstrap/popover');

require('script!tether');
require('bootstrap/bootstrap');

// OUTDATED BROWSER (< IE9)
// ---------------------------------|
require('script!outdated-browser/outdatedbrowser/outdatedbrowser');
outdatedBrowser({
	bgColor: '#f25648',
	color: '#ffffff',
	lowerThan: 'boxShadow',
	languagePath: ''
});

// MODERNIZR.JS
// ---------------------------------|
require('modernizr');

// POSTCSS
// ---------------------------------|
// require('cq-prolyfill')({
// 	postcss: true
// });
