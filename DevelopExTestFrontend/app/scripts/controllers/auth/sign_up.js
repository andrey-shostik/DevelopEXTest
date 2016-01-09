'use strict';
angular.module('developExTestFrontendApp')
  .controller('SignUpCtrl', ['$scope', '$state', '$cookies', 'Registration', 'CurrentUser',
    function ($scope, $state, $cookies, Registration, CurrentUser) {
      $scope.user = { user: {} }

      $scope.createAccount = function() {
        Registration.save($scope.user,
        function(response) {
          $cookies.putObject('_developex_current_user', response)
          CurrentUser.signIn(response);
          $state.transitionTo('home');
        },
        function(errors) {
          console.log(errors);
        });
      }
    }
  ]);
