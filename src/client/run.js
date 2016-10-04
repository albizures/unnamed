
/*@ngInject*/
module.exports = function($rootScope, $location, $mdDialog, $state) {
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

  $rootScope.showConfirm = function(evt, msg, msgLarg) {
    var confirm = $mdDialog.confirm()
      .title(msg)
      .textContent(msgLarg)
      .ariaLabel('Lucky day')
      .targetEvent(evt)
      .ok('Si')
      .cancel('No');

    return $mdDialog.show(confirm);
  };

  $rootScope.$on('event:auth-loginRequired', function () {
    $state.go('main');
  });
};