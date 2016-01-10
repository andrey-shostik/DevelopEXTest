'use strict';
angular.module('developExTestFrontendApp')
  .controller('TaskNewCtrl', ['$scope', '$state', '$stateParams', 'Tasks', 'CurrentUser',
    function ($scope, $state, $stateParams, Tasks, CurrentUser) {
      $scope.task = {}


      $scope.save = function() {
        Tasks.save({token: CurrentUser.token(), project_id: $stateParams.id, task: $scope.task},
          function(response) {
            $state.transitionTo('tasks_all', { id: $stateParams.id })
          },
          function(errors) {

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
