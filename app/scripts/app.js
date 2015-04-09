'use strict';

/**
 * @ngdoc overview
 * @name gatorApp
 * @description
 * # gatorApp
 *
 * Main module of the application.
 */
angular.module('gatorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MainController',
    'MainDirective',
  ]).run(function($rootScope,$location,$http,$window,AuthFactory){
    var params = $location.search();
    if(params.provider) $window.localStorage.setItem('gator-auth',JSON.stringify(params));
    $rootScope.$on('$routeChangeStart', function(event,next){
      console.log(event,next);
      if(AuthFactory.isAuthenticated()) {
        var data = JSON.parse($window.localStorage.getItem('gator-user'));
        $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
      }
    });
  });
