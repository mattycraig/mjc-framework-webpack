//--------------------------------------------|
// HELPERS
//--------------------------------------------|
(function() {

	// AVOID CONSOLE ERRORS (<= IE9)
	//----------------------------------------|
	let method;
	let noop = () => {};
	let methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	let length = methods.length;
	let console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];
		if (!console[method]) {
			console[method] = noop;
		}
	}

})();
