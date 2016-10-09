

/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider.state('odo.patient', {
    parent: 'odo',
    url: '/patients/:id',
    template: require('./patient.pug')(),
    controller: require('./patient.ctrl.js')
  });
};