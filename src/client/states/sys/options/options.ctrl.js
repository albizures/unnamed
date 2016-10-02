
/*@ngInject*/
module.exports = function ($scope, albModals, albApi) {
  albApi.configTable($scope);

  $scope.add = function (evt) {
    albModals.openAddOption(evt).then($scope.get);
  };

  function onGet(result) {
    $scope.options = result;
    console.log(result);
  }
  $scope.get = function () {
    $scope.promise = albApi.options.getAll().then(onGet);
  };
  
  $scope.edit = function (evt) {
    let option = $scope.selected[0];
    albModals.openEditOption(evt, option.id_option).then($scope.get);
  };

  $scope.delete = function (evt) {
    let option = $scope.selected[0];
    $scope.showConfirm(evt, 'Esta seguro de elimiar la opcion ' + option.name)
      .then(() => option.id_option)
      .then(albApi.options.delete)
      .then(() => $scope.selected.length = 0)
      .then($scope.get)
      .catch(albApi.toast.catch);
  };
  $scope.get();
};
