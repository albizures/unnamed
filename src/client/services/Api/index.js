
const toastTemplate = require('./toast.pug')();

module.exports = function (APP) {
  APP.factory(albApi.name, albApi);
};

/*@ngInject*/
function albApi($mdToast, $http) {
  const a = {};


  a.configTable = function ($scope) {
    $scope.selected = [];
    $scope.filter = {
      options: {
        debounce: 500
      }
    };
    $scope.limitOptions = [5, 10, 15];
    $scope.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    $scope.removeFilter = function () {
      $scope.filter.show = false;
      $scope.query.filter = '';
      
      if ($scope.filter.form.$dirty) {
        $scope.filter.form.$setPristine();
      }
    };
  };


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

  const getData = (request) => request.then(result => result.data);

  a.roles = require('./roles.js')($http, getData);
  a.states = require('./states.js')($http, getData);
  a.orgs = require('./orgs.js')($http, getData);
  a.users = require('./users.js')($http, getData);
  a.types = require('./types.js')($http, getData);
  a.options = require('./options.js')($http, getData);

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