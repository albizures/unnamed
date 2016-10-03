

/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider.state('sys.users', {
    parent: 'sys',
    url: '/users',
    template: require('./users.pug')(),
    controller: require('./users.ctrl.js')
  });
};