//--------------------------------------------|
// ANGULAR COMPONENT: App
//--------------------------------------------|
// Load up our Angular component: App

angular
	.module('myApp')
	.component('app', {
		controllerAs: 'vm',
		templateUrl: 'templates/components/app.html',
		controller: [function() {
			var vm = this;
			// CONTROLLER
		}
	]});
