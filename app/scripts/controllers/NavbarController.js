'use strict';
angular.module('MainController').controller('NavbarController',['$scope','$location','AuthFactory','trace',function($scope,$location,AuthFactory,trace){

  $scope.user = AuthFactory.getUser();

  $scope.isActive = function(viewLocation){
    return viewLocation === $location.path();
  };
  $scope.isLoggedIn = function(){
    return AuthFactory.isAuthenticated();
  };
  $scope.hasAuth = function(){
    return AuthFactory.hasOAuth();
  };
  $scope.logout = function(){
    AuthFactory.logout().success(function(){
      $location.path('/');
      AuthFactory.clearStorage();
    });
  };

  trace();
}]);