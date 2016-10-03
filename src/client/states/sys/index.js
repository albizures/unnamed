


module.exports = function sys (APP) {
  APP.config(main);

  APP.config(require('./roles'));
  APP.config(require('./states'));
  APP.config(require('./types'));
  APP.config(require('./orgs'));
  APP.config(require('./options'));
  APP.config(require('./users'));
};

/*@ngInject*/
function main ($stateProvider) {
  $stateProvider.state('sys', {
    url: '/sys',
    template: require('./sys.pug')(),
    controller: require('./sys.ctrl.js')
  });
};

