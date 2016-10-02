
/*@ngInject*/
module.exports = function ($scope, albModals, albApi) {
  albApi.configTable($scope);

  $scope.add = function (evt) {
    albModals.openAddRole(evt).then($scope.getRoles);
  };

  function onGet(result) {
    $scope.roles = result;
  }
  $scope.getRoles = function () {
    $scope.promise = albApi.roles.getAll().then(onGet);
  };
  
  $scope.edit = function (evt) {
    let role = $scope.selected[0];
    albModals.openEditRole(evt, role.id_role).then($scope.getRoles);
  };

  $scope.delete = function (evt) {
    let role = $scope.selected[0];
    $scope.showConfirm(evt, 'Esta seguro de elimiar el rol ' + role.name)
      .then(() => role.id_role)
      .then(albApi.roles.delete)
      .then(() => $scope.selected.length = 0)
      .then($scope.getRoles)
      .catch(albApi.toast.catch);
  };

  $scope.getRoles();

};
