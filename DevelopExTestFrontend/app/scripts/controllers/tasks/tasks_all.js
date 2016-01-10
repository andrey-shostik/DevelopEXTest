'use strict';
angular.module('developExTestFrontendApp')
  .controller('TasksAllCtrl', ['$scope', '$state', '$stateParams', 'Tasks', 'CurrentUser',
    function ($scope, $state, $stateParams, Tasks, CurrentUser) {

      Tasks.query({ token: CurrentUser.token(), project_id: $stateParams.id },
        function(response) {
          $scope.project = response;
          $scope.tasks = $scope.project.tasks;
          angular.forEach($scope.tasks, function(task) {
            var parts = task.end_date.split("-");
            task.end_date = new Date(parts[2], parts[1] - 1, parts[0]);
            console.log(task.end_date);
          });
        },
        function(errors) {
          $scope.errors = errors;
        }
      )


      $scope.update = function(task) {
        console.log(task);
        Tasks.update({ token: CurrentUser.token(), project_id: $stateParams.id, id: task.id, task: task},
          function(response) {
            console.log('updated');
          },
          function(errors) {
            console.log('fail');
          }
        );
      }
    }
  ]);
