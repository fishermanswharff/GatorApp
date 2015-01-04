'use strict';

/**
 * @ngdoc function
 * @name gatorAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gatorAppApp
 */
angular.module('gatorAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
