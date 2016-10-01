

require('./modals.styl');

module.exports = function (APP) {
  
  APP.factory(albModals.name, albModals);
  
};

/*@ngInject*/
function albModals($rootScope, $timeout, $mdPanel) {
  const a = {};

  const position = $mdPanel.newPanelPosition()
    .absolute()
    .top('100px')
    .centerHorizontally();
  const modalTimer = (scope, time = 500) => $timeout(() => scope.load = true, time);

  const openModal = (options) => new Promise(resolve => {
    options.scope = Object.assign(
      $rootScope.$new(),
      {close},
      options.scope
    );
    console.log($mdPanel.newPanelAnimation());
    options.animation = $mdPanel.newPanelAnimation()
      .openFrom(options.targetEvent)
      .withAnimation($mdPanel.animation.SCALE);
    options.zIndex = 100;
    options.hasBackdrop = true,
    options.attachTo = angular.element(document.body),
    options.clickOutsideToClose = true;
    options.escapeToClose = true;
    options.focusOnOpen = true;
    options.locals = options.resolve || {};
    options.position = position;
    options.resolve = {};
    options.locals.modalTimer = modalTimer;
    options.onDomRemoved = resolve;
    let modalInstance = $mdPanel.open(options);
    modalInstance.then(ref => console.log(ref));
    function close() {
      modalInstance.$$state.value.close();
    }
  });
  
  a.openAddRole = function (evt) {
    return openModal({
      targetEvent: evt,
      template: require('./roles/role.pug')(),
      controller: require('./roles/addRole/addRole.ctrl.js'),
      scope: {
        modal: {title: 'Agregar rol'}
      } 
    });
  };

  a.openEditRole = function (evt, id) {
    return openModal({
      targetEvent: evt,
      template: require('./roles/role.pug')(),
      controller: require('./roles/editRole/editRole.ctrl.js'),
      resolve: {id},
      scope: {
        modal: {title: 'Editar rol'}
      } 
    });
  };
  return a;
}