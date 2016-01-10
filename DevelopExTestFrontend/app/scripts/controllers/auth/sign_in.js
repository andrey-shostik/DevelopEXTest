'use strict';
angular.module('developExTestFrontendApp')
  .controller('SignInCtrl', ['$scope', '$state', '$cookies',
    'CurrentUser', 'Authentication',
    function ($scope, $state, $cookies, CurrentUser, Authentication) {
      $scope.user = {}

      $scope.signIn = function() {
        $scope.error = null;
        Authentication.save({user: $scope.user},
          function(response) {
            $cookies.putObject('_developex_current_user', response)
            CurrentUser.signIn(response);
            $state.transitionTo('home');
          },
          function(errors) {
            $scope.error = 'Invalid email or password';
          }
        )
      }
    }
  ]);
