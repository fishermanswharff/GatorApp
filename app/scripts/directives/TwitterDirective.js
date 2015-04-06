'use strict';
angular.module('MainDirective').directive('twitter',['trace',function(trace){
  return {
    restrict: 'E',
    templateUrl: 'views/twitter.html',
    controller: 'TwitterController',
    controllerAs: 'twitterController',
    bindToController: true,
    link: function($scope,element,attrs){
      trace($scope,element,attrs);
    }
  };
}]);