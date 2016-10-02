

/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi) {

  Promise.all([
    albApi.states.getByTable('sys_org').catch(albApi.toast.catch),
    albApi.types.getByTable('sys_org').catch(albApi.toast.catch),
  ]).then(results => {
    $scope.states = results[0];
    $scope.types = results[1];
    console.log(results, $scope);
    modalTimer($scope);
  });

  $scope.submitFrom = function () {
    albApi.orgs.post($scope.org)
      .then(albApi.toast.then('Se guardo correctamente la organizacion'))
      .then(result => $scope.close(result))
      .catch(albApi.toast.catch);
  };
};