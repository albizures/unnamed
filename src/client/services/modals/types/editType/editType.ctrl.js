
/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi, id) {

  albApi.types.getOne(id)
  .then(result => {
    $scope.type = result;
    return $scope;
  }).then(modalTimer);

  $scope.submitFrom = function () {
    albApi.types.put($scope.type.id_type_db, $scope.type)
      .then(albApi.toast.then('Se guardo correctamente el estado'))
      .then($scope.close)
      .catch(albApi.toast.catch);
  };
};