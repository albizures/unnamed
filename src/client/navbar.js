

module.exports = function (APP) {
  APP.controller(NavBar.name, NavBar);
};

/*@ngInject*/
function NavBar($rootScope, albApi, $state, $scope) {
  $scope.tabs = [];
  albApi.users.getOptions().then(result => {
    for (var index = 0; index < result.length; index++) {
      var element = result[index];
      if (element.type_name === 'Menu') {
        $scope.tabs.push(element);
      }
    }
    $scope.currentNavItem = $scope.tabs[0].name;
    $state.go($scope.tabs[0].name);
  }).catch(albApi.toast.catch);

  albApi.currentUser.then(user => $rootScope.currentUser = user);

  $scope.logout = function () {
    albApi.logout().then(() => location.href = '/login');
  };
}