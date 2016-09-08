(function(){
	angular.module('blocks.router', ['ngRoute'])
	.config(routes);

	routes.$inject = ['$locationProvider'];

	function routes ($locationProvider) {
		$locationProvider.html5Mode(true);
	}
})();
