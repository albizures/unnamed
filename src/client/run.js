
/*@ngInject*/
module.exports = function($rootScope, $location, $mdDialog, $state) {
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

  $rootScope.$on('event:auth-loginRequired', () => {
    $state.go('login');
  });

  $rootScope.$on('$stateChangeError', () => {
    alert('adfasdf');
    $state.go('404');
  });
};