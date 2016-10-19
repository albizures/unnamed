
/*@ngInject*/
module.exports = function loginCtrl($scope, albApi) {
  $scope.submitFrom = function () {
    albApi.login($scope.user).then(() => location.href = '/');
  };
  albApi.session().then(result => {
    console.log(typeof result);
    location.href = '/';
  });
};