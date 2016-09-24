
/*@ngInject*/
module.exports = function($rootScope, $location) {
  $rootScope.$on('event:auth-loginRequired', function() {
    if ($location.$$path !== '/') {
      if ($rootScope.currentUser && $rootScope.currentUser.usuario)
        $location.path('/dashboard');
      else {
        $location.path('/');
      }
    }
    return false;
  });
};