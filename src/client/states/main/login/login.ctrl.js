
/*@ngInject*/
module.exports = function loginCtrl($scope, albApi, $state) {
  $scope.submitFrom = function () {
    albApi.login($scope.user);
  };
  albApi.session().then(() => {
    $state.go('main');
  });
};