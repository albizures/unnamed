

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
    options.animation = $mdPanel.newPanelAnimation()
      .openFrom(options.targetEvent)
      .withAnimation($mdPanel.animation.SCALE);
    options.zIndex = 70;
    options.panelClass = 'alb-modal-' + options.size || 'sm',
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
      },
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

  a.openAddState = function (evt) {
    return openModal({
      targetEvent: evt,
      template: require('./states/state.pug')({edit: false}),
      controller: require('./states/addState/addState.ctrl.js'),
      scope: {
        modal: {title: 'Agregar Estado'}
      } 
    });
  };

  a.openEditState = function (evt, id) {
    return openModal({
      targetEvent: evt,
      template: require('./states/state.pug')({edit: true}),
      controller: require('./states/editState/editState.ctrl.js'),
      resolve: {id},
      scope: {
        modal: {title: 'Editar Estado'}
      } 
    });
  };


  a.openAddType = function (evt) {
    return openModal({
      targetEvent: evt,
      template: require('./types/type.pug')({edit: false}),
      controller: require('./types/addType/addType.ctrl.js'),
      scope: {
        modal: {title: 'Agregar tipo'}
      } 
    });
  };

  a.openEditType = function (evt, id) {
    return openModal({
      targetEvent: evt,
      template: require('./types/type.pug')({edit: true}),
      controller: require('./types/editType/editType.ctrl.js'),
      resolve: {id},
      scope: {
        modal: {title: 'Editar tipo'}
      } 
    });
  };

  a.openAddOrg = function (evt) {
    return openModal({
      targetEvent: evt,
      template: require('./orgs/org.pug')(),
      controller: require('./orgs/addOrg/addOrg.ctrl.js'),
      scope: {
        modal: {title: 'Agregar organizacion'}
      },
      size: 'md'
    });
  };

  a.openEditOrg = function (evt, id) {
    return openModal({
      targetEvent: evt,
      template: require('./orgs/org.pug')(),
      controller: require('./orgs/editOrg/editOrg.ctrl.js'),
      resolve: {id},
      scope: {
        modal: {title: 'Editar organizacion'}
      },
      size: 'md'
    });
  };
  a.openAddOption = function (evt) {
    return openModal({
      targetEvent: evt,
      template: require('./options/option.pug')(),
      controller: require('./options/addOption/addOption.ctrl.js'),
      scope: {
        modal: {title: 'Agregar opcion'}
      },
      size: 'lg'
    });
  };

  a.openEditOption = function (evt, id) {
    return openModal({
      targetEvent: evt,
      template: require('./options/option.pug')(),
      controller: require('./options/editOption/editOption.ctrl.js'),
      resolve: {id},
      scope: {
        modal: {title: 'Editar opcion'}
      },
      size: 'lg'
    });
  };
  return a;
}