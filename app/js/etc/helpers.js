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

	// GOOGLE ANALYTICS HELPERS
	//----------------------------------------|
	if (typeof ga !== 'undefined' && ga !== null) {

		// TRACK JQUERY AJAX REQUESTS IN GA
		$(document).ajaxSend(function(event, xhr, settings) {
			ga('send', 'pageview', settings.url);
		});

		// TRACK JS ERRORS IN GA
		(function(window){
			var undefined,
				link = function (href) {
						var a = window.document.createElement('a');
						a.href = href;
						return a;
				};
			window.onerror = function (message, file, line, column) {
				var host = link(file).hostname;
				ga('send', {
					'hitType': 'event',
					'eventCategory': (host == window.location.hostname || host == undefined || host == '' ? '' : 'external ') + 'error',
					'eventAction': message,
					'eventLabel': (file + ' LINE: ' + line + (column ? ' COLUMN: ' + column : '')).trim(),
					'nonInteraction': 1
				});
			};
		}(window));

		// TRACK PAGE SCROLL IN GA
		$(function(){
			var isDuplicateScrollEvent,
				scrollTimeStart = new Date,
				$window = $(window),
				$document = $(document),
				scrollPercent;

			$window.scroll(function() {
				scrollPercent = Math.round(100 * ($window.height() + $window.scrollTop())/$document.height());
				if (scrollPercent > 90 && !isDuplicateScrollEvent) {
					isDuplicateScrollEvent = 1;
					ga('send', 'event', 'scroll', 'Window: ' + $window.height() + 'px; Document: ' + $document.height() + 'px; Time: ' + Math.round((new Date - scrollTimeStart )/1000,1) + 's'
					);
				}
			});
		});
	}

	// BOOTSTRAP (v4) CUSTOM FILE INPUT
	//----------------------------------------|
	$('body').on('change', 'input[type="file"][data-toggle="custom-file"]', function (ev) {

		const $input = $(this);
		const target = $input.data('target');
		const $target = $(target);

		if (!$target.length)
			return console.error('Invalid target for custom file', $input);

		if (!$target.attr('data-content'))
			return console.error('Invalid `data-content` for custom file target', $input);

		// set original content so we can revert if user deselects file
		if (!$target.attr('data-original-content'))
			$target.attr('data-original-content', $target.attr('data-content'));

		const input = $input.get(0);

		let name = _.isObject(input)
			&& _.isObject(input.files)
			&& _.isObject(input.files[0])
			&& _.isString(input.files[0].name) ? input.files[0].name : $input.val();

		if (_.isNull(name) || name === '')
			name = $target.attr('data-original-content');

		$target.attr('data-content', name);

	});

})();
