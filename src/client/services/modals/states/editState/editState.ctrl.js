
/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi, id) {

  albApi.states.getOne(id)
  .then(result => {
    $scope.state = result;
    return $scope;
  }).then(modalTimer);

  $scope.submitFrom = function () {
    albApi.states.put($scope.state.id_state_db, $scope.state)
      .then(albApi.toast.then('Se guardo correctamente el rol'))
      .then($scope.close)
      .catch(albApi.toast.catch);
  };
};