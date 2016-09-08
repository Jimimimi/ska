(function(){
  angular.module('components.menu')
  .directive('menu', menu)
  .directive('menuItem', menuItem)
  .directive('menuUnderline', menuUnderline);

  function menu(){
    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'components/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {

      }
    };
  }

  function menuItem(){
    return {
      restrict: 'A',
      controller: 'MenuItemController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        href:"@"
      },

      link: function(scope,elem,attrs){
        elem.on('click', function(){
          if (!elem.hasClass('active')){
            var width = elem[0].offsetWidth +'px';
            var transform = 'translate3d('+ elem[0].offsetLeft +'px, 0px, 0px)'

            $(elem.parent()).find('.active').removeClass('active');
            elem.addClass('active');
            $('.menu-underline').css({
              width: width,
              transform: transform
            });
          }
        });
      }
    }
  }

  function menuUnderline(){
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="menu-underline"></div>',
      controller: 'MenuUnderlineController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {

      }
    }
  }
})();
