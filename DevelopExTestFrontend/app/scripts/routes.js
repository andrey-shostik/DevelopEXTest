'use strict';
angular.module('developExTestFrontendApp')
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('sign_in', {
          url: '/sign_in',
          templateUrl: 'views/auth/sign_in.html',
          controller: 'SignInCtrl'
        })
        .state('sign_up', {
          url: '/sign_up',
          templateUrl: 'views/auth/sign_up.html',
          controller: 'SignUpCtrl'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'views/projects/all.html',
          controller: 'ProjectsAllCtrl'
        })
        .state('projects_new', {
          url: '/projects/new',
          templateUrl: 'views/projects/form.html',
          controller: 'ProjectNewCtrl'
        })
        .state('projects_edit', {
          url: '/projects/:id/edit',
          templateUrl: 'views/projects/form.html',
          controller: 'ProjectEditCtrl'
        })
        .state('tasks_all', {
          url: '/project/:id',
          templateUrl: 'views/tasks/all.html',
          controller: 'TasksAllCtrl'
        })
        .state('home', {
          parent: 'projects'
        })
    }
  ]);
