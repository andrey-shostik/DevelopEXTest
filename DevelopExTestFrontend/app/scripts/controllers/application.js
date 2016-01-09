'use strict';

angular.module('developExTestFrontendApp')
  .controller('ApplicationCtrl', ['$scope', 'CurrentUser', function ($scope, CurrentUser) {
    $scope.currentUser = CurrentUser;

    $scope.logout = function() {
      CurrentUser.logout();
    }
  }]);
