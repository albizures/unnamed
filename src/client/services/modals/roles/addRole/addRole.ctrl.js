

/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi) {
  modalTimer($scope);

  $scope.submitFrom = function () {
    albApi.roles.post($scope.role)
      .then(albApi.toast.then('Se guardo correctamente el rol'))
      .then(result => $scope.close(result))
      .catch(albApi.toast.catch);
  };
};