(function(){
	angular.module('sections.<>', [
		'redware.core',
	])
	.config(config);

	config.$inject = ['$routeProvider'];

	function config ($routeProvider) {
		$routeProvider
		.when('/<>', {
			templateUrl: 'layout/sections/<>/<>.html',
			controller: '<>Controller',
			controllerAs: 'vm'
		});
	}
})();
