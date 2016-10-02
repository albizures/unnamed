
/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi, id) {
  //modalTimer($scope);
  Promise.all([
    albApi.states.getByTable('sys_org').catch(albApi.toast.catch),
    albApi.types.getByTable('sys_org').catch(albApi.toast.catch),
  ]).then(results => {
    $scope.states = results[0];
    $scope.types = results[1];
    console.log(results, $scope);
    modalTimer($scope);
  });

  albApi.orgs.getOne(id)
  .then(result => {
    $scope.org = result;
    return $scope;
  }).then(modalTimer);

  $scope.submitFrom = function () {
    albApi.orgs.put($scope.org.id_org, $scope.org)
      .then(albApi.toast.then('Se guardo correctamente la organizacion'))
      .then($scope.close)
      .catch(albApi.toast.catch);
  };
};