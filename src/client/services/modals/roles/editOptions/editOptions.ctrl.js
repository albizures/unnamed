

/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi, role) {
  $scope.role = role;
  albApi.configTable($scope);
  function onGet(result) {
    for (var index = 0; index < result.length; index++) {
      var option = result[index];
      if (option.id_role === role) {
        $scope.selected.push(
          option.id_role
        );
      }
    }
    $scope.options = result;
    console.log(result);
  }
  $scope.get = function () {
    $scope.promise = albApi.roles.getOptions(role).then(onGet);
  };

  $scope.toggleOption = function (option) {
    let promise;
    if (option.id_role) {
      promise = albApi.roles.postOption(role, option.id_option).then($scope.get);
    } else {
      promise = albApi.roles.deleteOption(role, option.id_option).then($scope.get);
    }
    promise.then($scope.get).catch(albApi.toast.catch);
  };

  $scope.get();
  $scope.promise.then(() => {
    modalTimer($scope);
  });
};