'use strict';
angular.module('MainController').controller('NavbarController',['$scope','$location','AuthFactory','trace',function($scope,$location,AuthFactory,trace){
  $scope.isActive = function(viewLocation){
    return viewLocation === $location.path();
  };
  $scope.isLoggedIn = function(){
    return AuthFactory.isAuthenticated();
  };
  $scope.logout = function(){
    AuthFactory.logout().success(function(){
      $location.paht('/login');
      AuthFactory.clearStorage();
    });
  };
}]);