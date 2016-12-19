//--------------------------------------------|
// ANGULAR
//--------------------------------------------|
// Load up Angular.js

require('angular');
// require('angular-messages');
// require('angular-animate');

// INIT
// --------------------------------------------|
angular
	.module('myApp', [
		// 'ngMessages',
		// 'ngAnimate'
	]);

// CONFIG
//--------------------------------------------|
// require('app/js/angular/config/config');

// angular
// 	.module('myApp')
// 	.config(['$http', function($http) {
// 		// CONFIG
// 	}]);

// COMPONENT
//--------------------------------------------|
// require('app/js/angular/components/app');

// angular
// 	.module('myApp')
// 	.component('app', {
// 		controllerAs: 'vm',
// 		templateUrl: 'templates/components/app.html',
// 		controller: [function() {
// 			var vm = this;
// 			// CONTROLLER
// 		}
// 	]});

// DIRECTIVE
//--------------------------------------------|
// require('app/js/angular/directives/ex');

// angular
// 	.module('myApp')
// 	.directive('directiveEx', function() {
// 		return {
// 			restrict: 'A',
// 			link: function(scope, elem, attr) {
// 				// DIRECTIVE
// 			}
// 		};
// 	});

// FACTORY
//--------------------------------------------|
// require('app/js/angular/factories/ex');

// angular
// 	.module('myApp')
// 	.factory('exFactory', ['$http', function($http) {
// 		// FACTORY
// 	}]);
