
/*@ngInject*/
module.exports = function ($scope, modalTimer, albApi, id) {
  console.log($scope);
  
  Promise.all([
    albApi.states.getByTable('sys_user').catch(albApi.toast.catch),
    albApi.roles.getAll().catch(albApi.toast.catch),
    albApi.orgs.getAll().catch(albApi.toast.catch),
    albApi.users.getOne(id).catch(albApi.toast.catch)
  ]).then(results => {
    $scope.states = results[0];
    $scope.roles = results[1];
    $scope.orgs = results[2];

    results[3].id_role = results[3].id_role.toString();
    results[3].id_org = results[3].id_org.toString();
    results[3].id_state = results[3].id_state.toString();
    
    $scope.user = results[3];
    console.log(results);
    modalTimer($scope);
  });

  $scope.submitFrom = function () {
    albApi.users.put($scope.user.id_user, $scope.user)
      .then(albApi.toast.then('Se guardo correctamente el usuario'))
      .then($scope.close)
      .catch(albApi.toast.catch);
  };
};