//--------------------------------------------|
// VENDOR.JS
//--------------------------------------------|
// Load our vendor plugins

// jQUERY
// ---------------------------------|
require('script-loader!jquery');

// LODASH
// ---------------------------------|
const _ = require('lodash');

// BOOTSTRAP COMPONENTS
// ---------------------------------|
// require('bootstrap/js/dist/util');
// require('bootstrap/js/dist/alert');
// require('bootstrap/js/dist/button');
// require('bootstrap/js/dist/carousel');
// require('bootstrap/js/dist/collapse');
// require('bootstrap/js/dist/dropdown');
// require('bootstrap/js/dist/modal');
// require('bootstrap/js/dist/scrollspy');
// require('bootstrap/js/dist/tab');
// require('bootstrap/js/dist/popover');
// require('bootstrap/js/dist/tooltip');

// require('script-loader!tether');
// require('bootstrap/bootstrap');
require('bootstrap');

// OUTDATED BROWSER (< IE9)
// ---------------------------------|
require('script-loader!outdated-browser/outdatedbrowser/outdatedbrowser');
outdatedBrowser({
	bgColor: '#f25648',
	color: '#ffffff',
	lowerThan: 'boxShadow',
	languagePath: ''
});


