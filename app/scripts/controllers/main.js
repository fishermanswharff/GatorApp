'use strict';

/**
 * @ngdoc function
 * @name gatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatorApp
 */
angular.module('MainController')
  .controller('MainCtrl', ['$scope','$http','$window','trace','AuthFactory','ServerUrl',function($scope,$http,$window,trace,AuthFactory,ServerUrl) {
    
    $scope.tokenParams = '';

    $scope.signIntoTwitter = function(){
      $http.get(ServerUrl + 'users/auth/twitter').success(function(response){
        $scope.userToken = $window.sessionStorage.getItem('gator-token');
        $scope.tokenParams = response.token + '&' + response.secret + '&' + $scope.userToken;
        $scope.authenticateTwitter($scope.tokenParams);
      });
    };

    $scope.authenticateTwitter = function(params){
      trace(params,'authenticating twitter');
      $window.location.href = 'https://api.twitter.com/oauth/authenticate?'+params;
    };

    $scope.isLoggedIn = function(){
      return AuthFactory.isAuthenticated();
    };
}]);
