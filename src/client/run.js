
/*@ngInject*/
module.exports = function($rootScope, $location, $mdDialog, $state) {
  $rootScope.showConfirm = function(evt, msg, msgLarge) {
    var confirm = $mdDialog.confirm()
      .title(msg)
      .textContent(msgLarge)
      .ariaLabel('Lucky day')
      .targetEvent(evt)
      .ok('Si')
      .cancel('No');

    return $mdDialog.show(confirm);
  };

  $rootScope.$on('event:auth-loginRequired', () => {
    console.log('event:auth-loginRequired');
    $state.go('login');
  });
};