(function(){
  angular.module('components.menu')
  .controller('MenuController', MenuController)
  .controller('MenuItemController', MenuItemController)
  .controller('MenuUnderlineController', MenuUnderlineController);

  MenuItemController.$inject = ['$location'];

  function MenuController(){

  }

  function MenuItemController($location){
    var vm = this;

    activate();

    function activate() {
      vm.isActive = isActive;
    }

    function isActive(path) {
      var test = $location.path() == path;
      return test;
    }

  }

  function MenuUnderlineController(){

  }

})();
