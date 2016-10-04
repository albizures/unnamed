
const angular = require('angular');
const router = require('angular-ui-router');
const animate = require('angular-animate');
const aria = require('angular-aria');
const material = require('angular-material');
const table = require('angular-material-data-table');
const ngMessages = require('angular-messages');


require('angular-http-auth');
require('angular-material/angular-material.css');
require('angular-material-data-table/dist/md-data-table.min.css');
require('./style/main.styl');

window.APP = angular.module('app', [
  router,
  ngMessages,
  aria,
  animate,
  material,
  table,
  'http-auth-interceptor'
]);

APP.run(require('./run.js'));
require('./config.js')(APP);

require('./directives/albSpinner/albSpinner.js').directive(APP);
require('./directives/albCompareTo/albCompareTo.js').directive(APP);

require('./services/modals')(APP);
require('./services/Api')(APP);

APP.directive(require('./directives/modelTeeth/modelTeeth.js').name, require('./directives/modelTeeth/modelTeeth.js').fn);