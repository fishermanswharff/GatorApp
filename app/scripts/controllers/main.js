'use strict';

/**
 * @ngdoc function
 * @name gatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatorApp
 */
angular.module('MainController')
  .controller('MainCtrl', ['$scope','$http','trace','AuthFactory',function($scope,$http,trace,AuthFactory) {
    
    $scope.signIntoTwitter = function(){
      trace('signing into twitter');
    };

    $scope.isLoggedIn = function(){
      return AuthFactory.isAuthenticated();
    };
}]);
