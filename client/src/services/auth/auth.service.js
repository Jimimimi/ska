(function() {
    'use strict';

    angular
        .module('services.auth')
        .factory('Auth', factory);

    factory.$inject = ['$http'];

    /* @ngInject */
    function factory($http) {
        var service = {
            authenticate: authenticate
        };

        return service;

        function authenticate(data) {
          return $http.post('auth/login', data);
        }
    }
})();
