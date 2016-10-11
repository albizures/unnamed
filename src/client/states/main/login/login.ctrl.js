
/*@ngInject*/
module.exports = function loginCtrl($scope, albApi) {
  $scope.submitFrom = function () {
    albApi.login($scope.user);
  };
  albApi.session().then(session => console.log(session));
};