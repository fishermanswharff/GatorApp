'use strict';
angular.module('MainController').controller('TwitterController',twitterController);
twitterController.$inject = ['trace','ServerUrl','$http','$location','$window'];

function twitterController(trace,ServerUrl,$http,$location,$window){
  var vm = this;
  vm.user = JSON.parse($window.localStorage.getItem('gator-user'));
  vm.tweets = [];

  vm.getTimeline = function(){
    $http.get(ServerUrl + '/tweets')
    .success(function(data, status, headers, config){
      trace(data,status,headers,config);
      angular.copy(data,vm.tweets);
    })
    .error(function(data,status,headers,config){
      trace(data,status,headers,config);
    });
  };

  // vm.getTimeline();
}