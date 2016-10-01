

/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider.state('sys.roles', {
    parent: 'sys',
    url: '/roles',
    template: require('./roles.pug')(),
    controller: require('./roles.ctrl.js')
  });
};