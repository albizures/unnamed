

/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi) {

  Promise.all([
    albApi.states.getByTable('sys_user').catch(albApi.toast.catch),
    albApi.roles.getAll().catch(albApi.toast.catch),
    albApi.orgs.getAll().catch(albApi.toast.catch),
  ]).then(results => {
    $scope.states = results[0];
    $scope.roles = results[1];
    $scope.orgs = results[2];
    console.log(results);
    modalTimer($scope);
  });

  $scope.submitFrom = function () {
    albApi.users.post($scope.user)
      .then(albApi.toast.then('Se guardo correctamente el usuario'))
      .then(result => $scope.close(result))
      .catch(albApi.toast.catch);
  };
};