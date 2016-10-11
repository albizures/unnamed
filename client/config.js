
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
APP.config(require('./states/odo/index.js'));
APP.config(require('./states/sys/index.js'));
APP.config(require('./states/odo/patient/index.js'));
APP.config(require('./states/odo/patients/index.js'));
APP.config(require('./states/sys/options/index.js'));
APP.config(require('./states/sys/orgs/index.js'));
APP.config(require('./states/sys/roles/index.js'));
APP.config(require('./states/sys/states/index.js'));
APP.config(require('./states/sys/types/index.js'));
APP.config(require('./states/sys/users/index.js'));
// endinjector