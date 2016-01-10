'use strict';
angular.module('developExTestFrontendApp')
  .factory('Authentication', ['$resource', function($resource) {
    return $resource('http://localhost:3000/authentication');
  }])
  .factory('Registration', ['$resource', function($resource) {
    return $resource('http://localhost:3000/registration');
  }])
  .factory('Projects', ['$resource', function($resource) {
    return $resource('http://localhost:3000/projects/:id', {id: '@id'},
      {
        'update': { method: 'PATCH' }
      });
  }])
  .factory('Tasks', ['$resource', function($resource) {
    return $resource('http://localhost:3000/projects/:project_id/tasks/:id', {
        project_id: '@project_id',
        id: '@id'
      },
      {
        'query': { isArray: false },
        'update': { method: 'PATCH' }
      }
    );
  }])
