
/*@ngInject*/
module.exports = function($rootScope, $location, $mdDialog) {
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
  // const position = $mdPanel.newPanelPosition()
  //   .absolute()
  //   .top('100px')
  //   .centerHorizontally();

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


  // $rootScope.confirm = (evt, msg) => new Promise(resolve => {

  // });
  // options.animation = $mdPanel.newPanelAnimation()
  //     .openFrom(options.targetEvent)
  //     .withAnimation($mdPanel.animation.SCALE);
  // options.zIndex = 100;
  // options.hasBackdrop = true,
  // options.attachTo = angular.element(document.body),
  // options.clickOutsideToClose = true;
  // options.escapeToClose = true;
  // options.focusOnOpen = true;
  // options.locals = options.resolve || {};
  // options.position = position;
  // options.resolve = {};
  // options.locals.modalTimer = modalTimer;
  // options.onDomRemoved = resolve;
  

};