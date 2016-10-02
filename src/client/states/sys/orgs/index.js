

/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider.state('sys.orgs', {
    parent: 'sys',
    url: '/orgs',
    template: require('./orgs.pug')(),
    controller: require('./orgs.ctrl.js')
  });
};