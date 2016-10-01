
const angular = require('angular');
// const modal = require('angular-ui-bootstrap/src/modal');
// const popover = require('angular-ui-bootstrap/src/popover');
// const tooltip = require('angular-ui-bootstrap/src/tooltip');
// const dropdown = require('angular-ui-bootstrap/src/dropdown');
const router = require('angular-ui-router');
const animate = require('angular-animate');
const aria = require('angular-aria');
const material = require('angular-material');
const table = require('angular-material-data-table');

require('angular-material/angular-material.css');
require('angular-material-data-table/dist/md-data-table.min.css');
require('./style/main.styl');

window.APP = angular.module('app', [
  router,
  // modal,
  // tooltip,
  // popover,
  // dropdown,
  aria,
  animate,
  material,
  table
]);

APP.run(require('./run.js'));
require('./config.js')(APP);

require('./directives/albSpinner/albSpinner.js').directive(APP);

require('./services/modals')(APP);
require('./services/Api')(APP);

APP.directive(require('./directives/modelTeeth/modelTeeth.js').name, require('./directives/modelTeeth/modelTeeth.js').fn);