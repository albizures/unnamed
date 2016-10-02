
/*@ngInject*/
module.exports = function ($scope, albModals, albApi) {
  albApi.configTable($scope);

  $scope.add = function (evt) {
    albModals.openAddOrg(evt).then($scope.get);
  };

  function onGet(result) {
    $scope.orgs = result;
    console.log(result);
  }
  $scope.get = function () {
    $scope.promise = albApi.orgs.getAll().then(onGet);
  };
  
  $scope.edit = function (evt) {
    let org = $scope.selected[0];
    albModals.openEditOrg(evt, org.id_org).then($scope.get);
  };

  $scope.delete = function (evt) {
    let org = $scope.selected[0];
    $scope.showConfirm(evt, 'Esta seguro de elimiar la organizacion ' + org.name)
      .then(() => org.id_org)
      .then(albApi.orgs.delete)
      .then(() => $scope.selected.length = 0)
      .then($scope.get)
      .catch(albApi.toast.catch);
  };
  $scope.get();
};
