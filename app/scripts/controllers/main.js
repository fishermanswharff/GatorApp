'use strict';

/**
 * @ngdoc function
 * @name gatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatorApp
 */
angular.module('MainController')
  .controller('MainCtrl', ['$scope','$http','trace',function($scope,$http,trace) {
    
    $scope.sign_into_twitter = function(){
      trace('signing into twitter');
    };
}]);
