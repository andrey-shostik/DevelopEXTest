'use strict';
angular.module('developExTestFrontendApp')
  .controller('ProjectEditCtrl', ['$scope', '$state', '$stateParams', 'Projects', 'CurrentUser',
    function ($scope, $state, $stateParams, Projects, CurrentUser) {
      Projects.get({token: CurrentUser.token(), id: $stateParams.id},
        function(response) {
          $scope.project = response;
        },
        function(errors) {

        }
      );

      $scope.save = function() {
        Projects.update({token: CurrentUser.token(), id: $scope.project.id, project: $scope.project},
          function(response) {
            $state.transitionTo('tasks_all', { id: response.id });
          },
          function(error) {
          }
        );
      }
    }
  ]);
