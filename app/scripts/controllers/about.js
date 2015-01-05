'use strict';

/**
 * @ngdoc function
 * @name gatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gatorApp
 */
angular.module('gatorApp').controller('AboutCtrl',['$scope','trace', function($scope,trace) {
  trace($scope);
}]);
