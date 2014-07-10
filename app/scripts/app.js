'use strict';

angular
  .module('loremImageLogoApp', [
    'ngRoute',
    'SafeApply'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/logo', {
        templateUrl: 'views/logo.html',
        controller: 'LogoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
