'use strict';
angular.module('developExTestFrontendApp')
  .controller('SignUpCtrl', ['$scope', '$state', '$cookies', 'Registration', 'CurrentUser',
    function ($scope, $state, $cookies, Registration, CurrentUser) {
      $scope.user = {}
      $scope.error = null;

      $scope.createAccount = function() {
        $scope.error = null;
        Registration.save({user: $scope.user},
        function(response) {
          $cookies.putObject('_developex_current_user', response)
          CurrentUser.signIn(response);
          $state.transitionTo('home');
        },
        function(errors) {
          $scope.error = errors.data.email[0];
        });
      }
    }
  ]);
