
const moment = require('moment');

module.exports = function (APP) {
  APP.config(main);
  
  require('./states/sys')(APP);
  require('./states/odo')(APP);
};


/*@ngInject*/
function main ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  moment.locale("es");
};




// injector
APP.config(require('./states/main/index.js'));
// endinjector