

/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi) {
  modalTimer($scope);

  $scope.submitFrom = function () {
    albApi.states.post($scope.state)
      .then(albApi.toast.then('Se guardo correctamente el estado'))
      .then(result => $scope.close(result))
      .catch(albApi.toast.catch);
  };
};