
const toastTemplate = require('./toast.pug')();

module.exports = function (APP) {
  APP.factory(albApi.name, albApi);
};

/*@ngInject*/
function albApi($mdToast, $http) {
  const a = {};



  function openToast(msg, type) {
    type = type || a.toast.INFO;
    return $mdToast.show({
      hideDelay: 3000,
      position: 'bottom right',
      controller: toastCtrl,
      template: toastTemplate,
      locals: {
        msg, type
      }
    });
  }

  a.toast = (msg, type) => openToast(msg, type);
  a.toast.success = msg => openToast(msg, a.toast.SUCCESS);
  a.toast.error = msg => openToast(msg, a.toast.ERROR);
  a.toast.SUCCESS = 'success';
  a.toast.INFO = 'info';
  a.toast.ERROR = 'error';
  a.toast.then = msg => result => {
    a.toast(msg, a.toast.SUCCESS);
    return result;
  };
  a.toast.catch = result => {
    a.toast(result.data.userMsg, a.toast.ERROR);
    return result;
  };

  a.roles = require('./roles.js')($http);
  a.states = require('./states.js')($http);
  a.orgs = require('./orgs.js')($http);
  a.users = require('./users.js')($http);

  return a;
}

const icons = {
  success: 'glyphicon-ok',
  info: 'glyphicon-bell',
  error: 'glyphicon-alert'
};

/*@ngInject*/
function toastCtrl($scope, $mdToast, msg, type) {
  $scope.msg = msg;
  $scope.icon = icons[type];
  $scope.close = function() {
    $mdToast.hide();
  };
}