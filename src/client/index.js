
const angular = require('angular');
const modal = require('angular-ui-bootstrap/src/modal');
const popover = require('angular-ui-bootstrap/src/popover');
const tooltip = require('angular-ui-bootstrap/src/tooltip');
const router = require('angular-ui-router');

require('./style/main.styl');

window.APP = angular.module('app', [
  router,
  modal,
  tooltip,
  popover
]);

APP.run(require('./run.js'));
APP.config(require('./config.js'));

console.log(require('./directives/modelTeeth/modelTeeth.js').name);
APP.directive(require('./directives/modelTeeth/modelTeeth.js').name, require('./directives/modelTeeth/modelTeeth.js').fn);