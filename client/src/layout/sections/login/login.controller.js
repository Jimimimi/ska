(function() {
    'use strict';

    angular
        .module('ska.layout')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope','Auth','$location','AlertService'];

    /* @ngInject */
    function LoginController($rootScope, Auth, $location, AlertService) {
        var vm = this;

        activate();

        function activate() {
          angular.extend(vm, {
            login: login
          });

          $rootScope.$on('loggedIn', function(e, d){
            AlertService.notify('success','Logged In');
            $location.url('/');
          });

          $rootScope.$on('failedLogin', function(e, d){
            AlertService.notify('error','Login failed');
            $location.url('/login');
          });
        }

        function login(){
          Auth
          .authenticate(vm.data)
          .then(function(response){
            $rootScope.$broadcast('loggedIn', response.data);
          })
          .catch(function(response){
            $rootScope.$broadcast('failedLogin', response.data);
          });
        }
    }
})();
