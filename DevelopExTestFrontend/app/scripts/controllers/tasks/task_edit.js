'use strict';
angular.module('developExTestFrontendApp')
  .controller('TaskEditCtrl', ['$scope', '$state', '$stateParams', 'Tasks', 'CurrentUser',
    function ($scope, $state, $stateParams, Tasks, CurrentUser) {

      Tasks.get({ token: CurrentUser.token(), id: $stateParams.id, project_id: $stateParams.project_id },
        function(response) {
          $scope.task = response;
        },
        function(errors) {
          $scope.errors = errors;
        }
      )

      $scope.save = function() {
        Tasks.update({ token: CurrentUser.token(), id: $scope.task.id, project_id: $stateParams.project_id, task: $scope.task },
          function(response) {
            $state.transitionTo('tasks_all', { id: $stateParams.project_id });
          },
          function(errors) {
            console.log(errors);
          }
        )
      }

      $scope.range = function(from, to) {
        var arr = [];
        for(var i = from; i <= to; i++) {
          arr.push(i);
        }
        return arr;
      }
    }
  ]);
