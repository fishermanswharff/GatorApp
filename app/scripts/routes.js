'use strict';
angular.module('gatorApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/users/auth/twitter/callback',{
        templateUrl: 'views/callback.html',
        controller: 'OmniAuthCallbackController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });