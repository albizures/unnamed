
const name = 'albCompareTo';
/*@ngInject*/
const fn = function () {
  function link(scope, element, attributes, ngModel) {

    ngModel.$validators.compareTo = function(modelValue) {
      return modelValue === scope.otherModelValue;
    };

    scope.$watch("otherModelValue", function() {
      ngModel.$validate();
    });
  }
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=albCompareTo"
    },
    link,
    replace: true,
    restrict: 'A',
  };
}; 

exports.directive = (APP) => APP.directive(name, fn);
exports.fn = fn;
exports.name = name;