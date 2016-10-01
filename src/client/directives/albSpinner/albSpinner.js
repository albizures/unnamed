
require('./albSpinner.styl');
const name = 'albSpinner';

/*@ngInject*/
const fn = function () {
  return {
    scope: {
      size: '@'
    },
    replace: true,
    restrict: 'E',
    template: require('./albSpinner.pug')
  };
}; 

exports.directive = (APP) => APP.directive(name, fn);
exports.fn = fn;
exports.name = name;