
module.exports = function (APP) {
  APP.config(odo);
  APP.config(require('./patients'));
  APP.config(require('./patient'));
};

/*@ngInject*/
function odo ($stateProvider) {
  $stateProvider.state('odo', {
    abstract: true,
    url: '/odo/:id',
    template: '<ui-view>',
    controller: require('./odo.ctrl.js')
  });
};

