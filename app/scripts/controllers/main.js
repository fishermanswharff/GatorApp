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
      $http.get(ServerUrl + 'users/auth/twitter').success(function(data, status, headers, config){
        $scope.userToken = $window.sessionStorage.getItem('gator-token');
        trace(data, status, headers, config);
        if(status == 202){
          $scope.tokenParams = response.token + '&' + response.secret;
          $scope.authenticateTwitter($scope.tokenParams);
        } else if(status == 203) {
          // this comes back if the user already has their twitter account stored in the api (already completed the oauth flow)
          // save the data that comes back (message and username), render somewhere on screen
        };
      }).error(function(data, status, headers, config){
        trace(data, status, headers, config);
      });
    };

    $scope.authenticateTwitter = function(params){
      trace(params,'authenticating twitter');
      $window.location.href = 'https://api.twitter.com/oauth/authenticate?'+params;
      // $http.get('https://api.twitter.com/oauth/authenticate?'+params).then(function(response){
      //   trace('response from authenticating with twitter: ',response);
      // });
    };

    $scope.isLoggedIn = function(){
      return AuthFactory.isAuthenticated();
    };
}]);
