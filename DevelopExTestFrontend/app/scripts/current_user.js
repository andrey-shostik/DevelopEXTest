'use strict';
angular.module('developExTestFrontendApp')
  .factory('CurrentUser', ['$cookies', 'Authentication', function($cookies, Authentication) {
    var currentUser = $cookies.getObject('_developex_current_user');

    return {
      logout: function logout() {
        currentUser = null;
        $cookies.remove('_developex_current_user');
      },

      signIn: function signIn(object) {
        currentUser = object
      },

      name: function name() { return currentUser.name },

      isLogined: function() {
        if(currentUser != null) {
          return true;
        }
        return false;
      },

      token: function() { return currentUser.token }
    };
  }]);
