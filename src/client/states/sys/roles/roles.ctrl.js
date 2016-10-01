
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

  $scope.add = function (evt) {
    albModals.openAddRole(evt).then($scope.getRoles);
  };

  function onGet(result) {
    console.log(result);
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
