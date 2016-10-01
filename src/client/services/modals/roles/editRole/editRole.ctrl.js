
/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi, id) {
  //modalTimer($scope);
  console.log($scope);

  albApi.roles.getOne(id)
  .then(result => {
    $scope.role = result;
    return $scope;
  }).then(modalTimer);

  $scope.submitFrom = function () {
    albApi.roles.put($scope.role.id_role, $scope.role)
      .then(albApi.toast.then('Se guardo correctamente el rol'))
      .then($scope.close)
      .catch(albApi.toast.catch);
  };
};