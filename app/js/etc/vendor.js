//--------------------------------------------|
// VENDOR.JS
//--------------------------------------------|
// Load our vendor plugins

// BOOTSTRAP COMPONENTS
// ---------------------------------|
// require('bootstrap/transition');
// require('bootstrap/affix');
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

require('script!bootstrap/bootstrap.js');

// OUTDATED BROWSER (<= IE8)
// ---------------------------------|
require('script!outdated-browser/outdatedbrowser/outdatedbrowser');
outdatedBrowser({
	bgColor: '#f25648',
	color: '#ffffff',
	lowerThan: 'boxShadow',
	languagePath: ''
});

// FASTCLICK.JS
// ---------------------------------|
require('script!fastclick');
FastClick.attach(document.body);

// ANCHOR.JS
// ---------------------------------|
require('script!anchor-js/anchor');
anchors.options = {
	icon: '#'
};
anchors.add();

// MODERNIZR.JS
// ---------------------------------|
require('modernizr');

