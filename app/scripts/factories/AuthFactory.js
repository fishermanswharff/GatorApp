'use strict';
angular.module('gatorApp').factory('AuthFactory',['$http','$window','$location','ServerUrl','trace',function($http,$window,$location,ServerUrl,trace){

  var login = function(credentials){
    trace(credentials);
    return $http.post(ServerUrl + '/login',credentials).success(function(response){
      _storeSession(response);
    });
  };

  var logout = function(){
    return $http.get(ServerUrl + '/logout').success(function(response){
      $window.localStorage.removeItem('gator-user');
      $window.localStorage.removeItem('gator-auth');
      $location.path('/');
      trace(response);
    });
  };

  var isAuthenticated = function(){
    var data = JSON.parse($window.localStorage.getItem('gator-user'));
    if(data) return !!data.token;
    return false;
    // return !!$window.localStorage.getItem('gator-token');
  };

  var clearStorage = function(){
    trace($window.localStorage);
    return !!$window.localStorage.clear();
  };

  var postNewUser = function(user){
    return $http.post(ServerUrl + '/users',{user: user}).success(function(response){
      _storeSession(response);
    }).error(function(data, status, headers, config){
      trace(data,status,headers,config,'you are so stupid, you are doing it wrong');
    });
  };

  var _storeSession = function(data){
    $window.localStorage.setItem('gator-user', JSON.stringify(data));
    $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
  };

  var hasOAuth = function(){
    var data = JSON.parse($window.localStorage.getItem('gator-auth'));
    if(data) return !!data;
    return false;
  };

  return {
    login: login,
    logout: logout,
    isAuthenticated: isAuthenticated,
    clearStorage: clearStorage,
    postNewUser: postNewUser,
    hasOAuth: hasOAuth
  };
}]);