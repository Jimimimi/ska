(function(){
	angular.module('sections.login', [
		'ska.core',
		'services.auth',
	])
	.config(config);

	config.$inject = ['$routeProvider'];

	function config ($routeProvider) {
		$routeProvider
		.when('/login', {
			templateUrl: 'layout/sections/login/login.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		});
	}
})();
