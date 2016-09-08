(function(){
  'use strict';

  angular.module('ska.layout', [
    'ska.templates',
    'services.alert',
    'sections.login',
    'sections.dashboard',

    'components.menu'
  ])
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$rootScope'];
  function MainController($scope, $rootScope){
    $rootScope.$on('loggedIn', function(e, data){
      $scope.loggedIn = true;
      $scope.user = data;
    });
  }
})();
