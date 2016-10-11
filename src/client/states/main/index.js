
/*@ngInject*/
function main ($stateProvider) {
  $stateProvider.state('main', {
    url: '/',
    template: require('./main.pug')(),
    controller: require('./main.ctrl.js')
  });
};

module.exports = function (APP) {
  APP.config(main);
  APP.config(require('./login'));
  APP.config(require('./404'));
};
