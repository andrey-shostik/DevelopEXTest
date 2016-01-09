'use strict';
angular.module('developExTestFrontendApp')
  .factory('Authentication', ['$resource', function($resource) {
    return $resource('http://localhost:3000/authentication');
  }])
  .factory('Registration', ['$resource', function($resource) {
    return $resource('http://localhost:3000/registration');
  }])
  .factory('Projects', ['$resource', function($resource) {
    return $resource('http://localhost:3000/projects/:id');
  }])
  .factory('Tasks', ['$resource', function($resource) {
    return $resource('http://localhost:3000/projects/:project_id/tasks', {
        project_id: '@project_id',
        id: '@id'
      },
      { 'query': { isArray: false } }
    );
  }])
