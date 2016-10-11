
/*@ngInject*/
module.exports = function login ($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    template: require('./login.pug')(),
    controller: require('./login.ctrl.js')
  });
};
