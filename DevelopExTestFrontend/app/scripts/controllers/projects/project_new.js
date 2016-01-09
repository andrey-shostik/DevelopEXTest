'use strict';
angular.module('developExTestFrontendApp')
  .controller('ProjectNewCtrl', ['$scope', '$state', 'Projects', 'CurrentUser',
    function ($scope, $state, Projects, CurrentUser) {
      $scope.project = {}

      $scope.create = function() {
        Projects.save({token: CurrentUser.token(), project: $scope.project},
          function(response) {
            $state.transitionTo('tasks_all', { id: response.id });
          },
          function(error) {
          }
        )
      }
    }
  ]);
