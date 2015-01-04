'use strict';

/**
 * @ngdoc function
 * @name gatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gatorApp
 */
angular.module('gatorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
