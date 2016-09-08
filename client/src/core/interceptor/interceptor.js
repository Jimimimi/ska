(function(){
	angular.module('blocks.interceptor', [])
	.factory('AuthorizeInterceptor', interceptor)
	.config(['$httpProvider',function($httpProvider) {
		//Http Intercpetor to check auth failures for xhr requests
		$httpProvider.interceptors.push('AuthorizeInterceptor');
	}]);

	interceptor.$inject =['$q','$location'];

	function interceptor ($q,$location){
		return {
			response: function(response){
				if (response.status === 401) {
					console.log("Response 401");
				}
				return response || $q.when(response);
			},
			responseError: function(rejection) {
				if (rejection.status === 401) {
					console.log("Response Error 401",rejection);
					window.location = window.location.origin + '/login';
				}
				return $q.reject(rejection);
			}
		};
	}
})();
