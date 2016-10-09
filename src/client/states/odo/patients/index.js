

/*@ngInject*/
module.exports = function patients ($stateProvider) {
  $stateProvider.state('odo.patients', {
    parent: 'odo',
    url: '/patients',
    template: require('./patients.pug')(),
    controller: require('./patients.ctrl.js')
  });
};

