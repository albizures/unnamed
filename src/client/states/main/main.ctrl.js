
/*@ngInject*/
module.exports = function ($scope, albApi) {
  $scope.submitFrom = function () {
    albApi.login($scope.user);
  };
  albApi.session().then(session => console.log(session));
};