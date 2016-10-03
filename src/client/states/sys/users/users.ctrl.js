
/*@ngInject*/
module.exports = function ($scope, albModals, albApi) {
  albApi.configTable($scope);

  $scope.add = function (evt) {
    albModals.openAddUser(evt).then($scope.get);
  };

  function onGet(result) {
    $scope.users = result;
    console.log(result);
  }
  $scope.get = function () {
    $scope.promise = albApi.users.getAll().then(onGet);
  };
  
  $scope.edit = function (evt) {
    let user = $scope.selected[0];
    albModals.openEditUser(evt, user.id_user).then($scope.get);
  };

  $scope.delete = function (evt) {
    let user = $scope.selected[0];
    $scope.showConfirm(evt, 'Esta seguro de elimiar la opcion ' + user.name)
      .then(() => user.id_user)
      .then(albApi.users.delete)
      .then(() => $scope.selected.length = 0)
      .then($scope.get)
      .catch(albApi.toast.catch);
  };
  $scope.get();
};
