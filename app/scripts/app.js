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
    $rootScope.$on('$routeChangeStart', function(event,next){
      if(AuthFactory.isAuthenticated()) {
        $http.defaults.headers.common.Authorization = 'Token token=' + $window.sessionStorage.getItem('jw-token');
      }
    });
  });
  