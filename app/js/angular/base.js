//--------------------------------------------|
// ANGULAR
//--------------------------------------------|
// Load up Angular.js

// require('angular');
// require('angular-messages');
// require('angular-animate');

// INIT
//--------------------------------------------|
angular
	.module('app', [
		// 'ngMessages',
		// 'ngAnimate'
	]);

// CONFIG
//--------------------------------------------|
// require('app/js/angular/config/config');

// angular
// 	.module('app')
// 	.config(['dep', function(dep) {
// 		// CONFIG
// 	}]);

// COMPONENT
//--------------------------------------------|
// require('app/js/angular/components/ex');

// angular
// 	.module('app')
// 	.component('example', {
// 		controllerAs: 'vm',
// 		templateUrl: 'templates/components/example.html',
// 		controller: ['dep', function(dep) {
// 			var vm = this;
//			// CONTROLLER
// 		}
// 	}]);

// DIRECTIVE
//--------------------------------------------|
// require('app/js/angular/directives/ex');

// angular
// 	.module('app')
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
// 	.module('app')
// 	.factory('exFactory', ['$http', function($http) {
// 		return $http.get('something.json');
//		// FACTORY
// 	}]);
