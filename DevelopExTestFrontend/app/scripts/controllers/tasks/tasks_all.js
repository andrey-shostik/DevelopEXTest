'use strict';
angular.module('developExTestFrontendApp')
  .controller('TasksAllCtrl', ['$scope', '$state', '$stateParams', 'Tasks', 'CurrentUser',
    function ($scope, $state, $stateParams, Tasks, CurrentUser) {

      Tasks.query({ token: CurrentUser.token(), project_id: $stateParams.id },
        function(response) {
          console.log(response);
          $scope.project = response;
          $scope.tasks = $scope.project.tasks;
        },
        function(errors) {
          $scope.errors = errors;
        }
      )
    }
  ]);
