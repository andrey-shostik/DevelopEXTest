'use strict';
angular.module('developExTestFrontendApp')
  .controller('ProjectNewCtrl', ['$scope', '$state', 'Projects', 'CurrentUser',
    function ($scope, $state, Projects, CurrentUser) {
      $scope.project = { name: '' }
      $scope.errors = {}

      $scope.save = function() {
        $scope.errors = {}
        Projects.save({token: CurrentUser.token(), project: $scope.project},
          function(response) {
            $state.transitionTo('tasks_all', { id: response.id });
          },
          function(errors) {
            $scope.errors.name(errors.data.name[0]);
          }
        )
      }
    }
  ]);
