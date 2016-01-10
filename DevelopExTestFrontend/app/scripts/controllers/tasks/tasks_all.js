'use strict';
angular.module('developExTestFrontendApp')
  .controller('TasksAllCtrl', ['$scope', '$state', '$stateParams', 'Tasks', 'CurrentUser',
    function ($scope, $state, $stateParams, Tasks, CurrentUser) {

      Tasks.query({ token: CurrentUser.token(), project_id: $stateParams.id },
        function(response) {
          $scope.project = response;
          $scope.tasks = $scope.project.tasks;
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

      $scope.deleteTask = function(task) {
        Tasks.delete({token: CurrentUser.token(), project_id: $stateParams.id, id: task.id},
          function(response) {
            $scope.tasks.splice($scope.tasks.indexOf(task), 1);
          },
          function(errors) {
          }
        );
      };

      $scope.range = function(from, to) {
        var arr = [];
        for(var i = from; i <= to; i++) {
          arr.push(i);
        }
        return arr;
      }
    }
  ]);
