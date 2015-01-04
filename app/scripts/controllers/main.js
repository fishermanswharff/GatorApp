'use strict';

/**
 * @ngdoc function
 * @name gatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatorApp
 */
angular.module('gatorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
