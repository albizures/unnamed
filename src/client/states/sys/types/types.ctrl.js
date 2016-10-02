
/*@ngInject*/
module.exports = function ($scope, albModals, albApi) {
  albApi.configTable($scope);

  $scope.add = function (evt) {
    albModals.openAddType(evt).then($scope.get);
  };

  function onGet(result) {
    $scope.types = result;
  }
  $scope.get = function () {
    $scope.promise = albApi.types.getAll().then(onGet);
  };
  
  $scope.edit = function (evt) {
    let type = $scope.selected[0];
    albModals.openEditType(evt, type.id_type_db).then($scope.get);
  };

  $scope.delete = function (evt) {
    let type = $scope.selected[0];
    $scope.showConfirm(evt, 'Esta seguro de eliminar el tipo ' + type.name)
      .then(() => type.id_type_db)
      .then(albApi.types.delete)
      .then(() => $scope.selected.length = 0)
      .then($scope.get);
  };

  $scope.get();
};