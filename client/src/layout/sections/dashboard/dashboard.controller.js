(function() {
    'use strict';

    angular
        .module('ska.layout')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [];

    /* @ngInject */
    function DashboardController() {
        var vm = this;

        activate();

        function activate() {
          angular.extend(vm, {
            
          });
        }
    }
})();
