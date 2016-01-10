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

      $scope.delete = function(project) {
        Projects.delete({ token: CurrentUser.token(), id: project.id },
          function(response) {
            $scope.projects.splice($scope.projects.indexOf(project), 1);
          },
          function(error) {

          }
        )
      }
    }
  ]);
