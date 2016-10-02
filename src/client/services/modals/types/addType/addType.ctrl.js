

/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi) {
  modalTimer($scope);

  $scope.submitFrom = function () {
    albApi.types.post($scope.type)
      .then(albApi.toast.then('Se guardo correctamente el tipo'))
      .then(result => $scope.close(result))
      .catch(albApi.toast.catch);
  };
};