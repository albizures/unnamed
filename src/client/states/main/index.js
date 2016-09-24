
/*@ngInject*/
module.exports = function($stateProvider) {
  $stateProvider.state('main', {
    url: '/',
    template: require('./main.pug')(),
    controller: require('./main.ctrl.js')
  });
};