'use strict';

/**
 * @ngdoc function
 * @name gatorAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatorAppApp
 */
angular.module('gatorAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
