
/*@ngInject*/
module.exports = function ($scope, albModals, albApi) {
  $scope.selected = [];
  $scope.filter = {
    options: {
      debounce: 500
    }
  };
  $scope.limitOptions = [5, 10, 15];
  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };

  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if ($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };
  console.log($scope);
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