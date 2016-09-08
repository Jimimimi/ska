(function(){
	angular.module('sections.dashboard', [
		'ska.core',
	])
	.config(config);

	config.$inject = ['$routeProvider'];

	function config ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'layout/sections/dashboard/dashboard.html',
			controller: 'DashboardController',
			controllerAs: 'vm'
		});
	}
})();
