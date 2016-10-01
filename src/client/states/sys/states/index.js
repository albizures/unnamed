

/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider.state('sys.states', {
    parent: 'sys',
    url: '/states',
    template: require('./states.pug')(),
    controller: require('./states.ctrl.js')
  });
};