'use strict';
angular.module('developExTestFrontendApp')
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('sign_in', {
          url: '/sign_in',
          templateUrl: 'views/auth/sign_in.html',
          controller: 'SignInCtrl',
          noAuth: true
        })
        .state('sign_up', {
          url: '/sign_up',
          templateUrl: 'views/auth/sign_up.html',
          controller: 'SignUpCtrl',
          noAuth: true
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'views/projects/all.html',
          controller: 'ProjectsAllCtrl',
          auth: true
        })
        .state('projects_new', {
          url: '/projects/new',
          templateUrl: 'views/projects/form.html',
          controller: 'ProjectNewCtrl',
        })
        .state('projects_edit', {
          url: '/projects/:id/edit',
          templateUrl: 'views/projects/form.html',
          controller: 'ProjectEditCtrl',
        })
        .state('tasks_all', {
          url: '/project/:id',
          templateUrl: 'views/tasks/all.html',
          controller: 'TasksAllCtrl',
        })
        .state('tasks_edit', {
          url: '/projects/:project_id/task/:id/',
          templateUrl: 'views/tasks/form.html',
          controller: 'TaskEditCtrl',
        })
        .state('tasks_new', {
          url: '/projects/:id/tasks/new',
          templateUrl: 'views/tasks/form.html',
          controller: 'TaskNewCtrl',
        })
        .state('home', {
          url: '/',
          templateUrl: 'views/projects/all.html',
          controller: 'ProjectsAllCtrl',
        })
    }
  ]).run(function($rootScope, CurrentUser, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      if(toState.noAuth) {
        return;
      }

      if(!CurrentUser.isLogined()) {
        $location.path('/sign_in');
      }
    });
  });
