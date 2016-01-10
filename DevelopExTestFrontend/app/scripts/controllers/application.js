'use strict';

angular.module('developExTestFrontendApp')
  .controller('ApplicationCtrl', ['$scope', '$state', 'CurrentUser', function ($scope, $state, CurrentUser) {
    $scope.currentUser = CurrentUser;

    $scope.logout = function() {
      CurrentUser.logout();
      $state.transitionTo('sign_in');
    }
  }]);
