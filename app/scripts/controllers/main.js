'use strict';

/**
 * @ngdoc function
 * @name gatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatorApp
 */
angular.module('MainController')
  .controller('MainCtrl', ['$scope','$http','$window','$location','trace','AuthFactory','ServerUrl',function($scope,$http,$window,$location,trace,AuthFactory,ServerUrl) {
    $scope.tokenParams = '';
    $scope.signIntoTwitter = function(){
      $http.get(ServerUrl + '/users/auth/twitter').success(function(data, status, headers, config){
        $scope.userToken = $window.sessionStorage.getItem('gator-token');
        trace(data, status, headers, config);
        if(status === 202){
          trace('sending you to twitter to authorize this data:', data);
          $scope.tokenParams = data.token + '&' + data.secret;
          $scope.authenticateTwitter($scope.tokenParams);
        } else if(status === 203) {
          trace('already authenticated with twitter', data);
          $location.path('/social');
        }
      }).error(function(data, status, headers, config){
        trace(data, status, headers, config);
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
