
/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi, id) {
  //modalTimer($scope);
  Promise.all([
    albApi.states.getByTable('sys_option').catch(albApi.toast.catch),
    albApi.types.getByTable('sys_option').catch(albApi.toast.catch),
  ]).then(results => {
    $scope.states = results[0];
    $scope.types = results[1];
    console.log(results, $scope);
    modalTimer($scope);
  });

  albApi.options.getOne(id)
  .then(result => {
    $scope.option = result;
    return $scope;
  }).then(modalTimer);

  $scope.submitFrom = function () {
    albApi.options.put($scope.option.id_option, $scope.option)
      .then(albApi.toast.then('Se guardo correctamente la opcion'))
      .then($scope.close)
      .catch(albApi.toast.catch);
  };
};