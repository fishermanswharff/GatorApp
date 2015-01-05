'use strict';
angular.module('MainController')
  .controller('OmniAuthCallbackController',[
    '$scope',
    '$location',
    '$routeParams',
    'trace',
    function($scope,$location,$routeParams,trace){
      trace($location.path(), $routeParams);
    }]);