

/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider.state('sys.types', {
    parent: 'sys',
    url: '/types',
    template: require('./types.pug')(),
    controller: require('./types.ctrl.js')
  });
};