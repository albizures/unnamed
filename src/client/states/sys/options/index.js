

/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider.state('sys.options', {
    parent: 'sys',
    url: '/options',
    template: require('./options.pug')(),
    controller: require('./options.ctrl.js')
  });
};