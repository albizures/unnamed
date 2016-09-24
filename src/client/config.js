
const moment = require('moment');

/*@ngInject*/
module.exports = function($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  moment.locale("es");
};



// injector
APP.config(require('./states/main/index.js'));
// endinjector