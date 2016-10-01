


module.exports = function sys (APP) {
  APP.config(main);

  APP.config(require('./roles'));
  APP.config(require('./states'));
};

/*@ngInject*/
function main ($stateProvider) {
  $stateProvider.state('sys', {
    url: '/sys',
    template: require('./sys.pug')(),
    controller: require('./sys.ctrl.js')
  });
};

