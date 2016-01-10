'use strict';
angular.module('developExTestFrontendApp')
  .controller('ProjectsAllCtrl', ['$scope', '$state', 'Projects', 'CurrentUser',
    function ($scope, $state, Projects, CurrentUser) {

      Projects.query({ token: CurrentUser.token() },
        function(response) {
          $scope.projects = response;
        },
        function(errors) {
          $scope.errors = errors;
        }
      )

      $scope.delete = function(index, objectId) {
        Projects.delete({ token: CurrentUser.token(), id: objectId },
          function(response) {
            $scope.projects.splice(index, 1)
          },
          function(error) {

          }
        )
      }
    }
  ]);
