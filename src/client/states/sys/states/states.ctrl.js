
/*@ngInject*/
module.exports = function ($scope, albModals, albApi) {
  albApi.configTable($scope);

  $scope.add = function (evt) {
    albModals.openAddState(evt).then($scope.get);
  };

  function onGet(result) {
    $scope.states = result;
  }
  $scope.get = function () {
    $scope.promise = albApi.states.getAll().then(onGet);
  };
  
  $scope.edit = function (evt) {
    let state = $scope.selected[0];
    albModals.openEditState(evt, state.id_state_db).then($scope.get);
  };

  $scope.delete = function (evt) {
    let state = $scope.selected[0];
    $scope.showConfirm(evt, 'Esta seguro de eliminar el estado ' + state.name)
      .then(() => state.id_state_db)
      .then(albApi.states.delete)
      .then(() => $scope.selected.length = 0)
      .then($scope.get);
  };

  $scope.get();
};