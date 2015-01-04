'use strict';
angular.module('gatorApp').factory('AuthFactory',['$http','$window','ServerUrl','trace',function($http,$window,ServerUrl,trace){
  trace($http,$window,ServerUrl);
}]);