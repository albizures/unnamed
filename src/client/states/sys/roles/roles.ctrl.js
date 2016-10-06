
/*@ngInject*/
module.exports = function ($scope, albModals, albApi) {
  albApi.configTable($scope);

  $scope.add = function (evt) {
    albModals.openAddRole(evt).then($scope.get);
  };

  function onGet(result) {
    $scope.roles = result;
  }
  $scope.get = function () {
    $scope.promise = albApi.roles.getAll().then(onGet);
  };
  
  $scope.edit = function (evt) {
    let role = $scope.selected[0];
    albModals.openEditRole(evt, role.id_role).then($scope.get);
  };

  $scope.delete = function (evt) {
    let role = $scope.selected[0];
    $scope.showConfirm(evt, 'Esta seguro de elimiar el rol ' + role.name)
      .then(() => role.id_role)
      .then(albApi.roles.delete)
      .then(() => $scope.selected.length = 0)
      .then($scope.get)
      .catch(albApi.toast.catch);
  };
  $scope.editOptions = function (evt) {
    let role = $scope.selected[0];
    albModals.openEditOptionsRole(evt, role.id_role);
  };
  $scope.get();

};
