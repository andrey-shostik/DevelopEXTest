angular.module('developExTestFrontendApp')
  .factory('Authentication', ['$resource', function($resource) {
    $resource('localhost:3000/authentication');
  })])
