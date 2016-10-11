
const moment = require('moment');

module.exports = function (APP) {
  APP.config(main);
  
  require('./states/main')(APP);
  require('./states/sys')(APP);
  require('./states/odo')(APP);
};


/*@ngInject*/
function main ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise(function($injector, $location){
    var state = $injector.get('$state');
    state.go('404');
    return $location.path();
  });
  $locationProvider.html5Mode(true);
  moment.locale("es");
};