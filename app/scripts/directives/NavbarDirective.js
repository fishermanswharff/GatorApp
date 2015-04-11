'use strict';
angular.module('MainDirective').directive('navbar',['$routeParams','$location','trace',function($routeParams,$location,trace){
  return {
    restrict: 'E',
    templateUrl: 'views/nav.html',
    controller: 'NavbarController',
    bindToController: true,
    scope: {},
    link: function($scope,element,attrs){
      var toggle = element.find('[data-toggle=dropdown]');
      var dropdown = toggle.next();
      var logout = element.find('.logout');

      trace('NavbarDirective: ',toggle, logout, $scope,element,attrs);

      toggle.on('click',function(event){
        dropdown.toggleClass('active');
        trace('toggle button was clicked', event);
      });

      logout.on('click',function(event){
        trace('logout was clicked');
        toggle.next().removeClass('active');
      });
    }
  };
}]);