'use strict';
angular.module('developExTestFrontendApp')
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $stateProvider, $urlRouterProvider) {

      $locationProvider.html5Mode(true)

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .state('sign_in', {
          url: '/sign_in',
          templateUrl: 'views/sign_in_page.html',
          controller: 'SignInCtrl'
        })
    }
  ]);
