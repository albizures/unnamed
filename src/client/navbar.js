

module.exports = function (APP) {
  APP.controller(NavBar.name, NavBar);
};

/*@ngInject*/
function NavBar($rootScope, albApi) {
  $rootScope.tabs = [];
  albApi.users.getOptions().then(result => {
    for (var index = 0; index < result.length; index++) {
      var element = result[index];
      if (element.type_name === 'Menu') {
        $rootScope.tabs.push(element);
      }
    }
    $rootScope.currentNavItem = $rootScope.tabs[0].name;
  }).catch(albApi.toast.catch);
}