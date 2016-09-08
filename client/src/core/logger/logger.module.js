(function(){
	angular.module('blocks.logger', [])
	.config(config);

	config.$inject = ['$logProvider'];

	function config ($logProvider) {
		'use strict';

		// Enable/Disable debug logs.
		$logProvider.debugEnabled(true);
	}
})();
