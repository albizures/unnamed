
const moment = require('moment');

/*@ngInject*/
module.exports = function ($scope, $stateParams, albApi) {
  albApi.users.getOne($stateParams.id)
    .then(user => $scope.user = user)
    .then(() => $scope.loadUser = true)
    .catch(err => {
      err.data.userMsg = 'Error al consultar al paciente';
      albApi.toast.catch(err);
    });
  $scope.actions = {};
  $scope.onSelectTeeth = function (teeth) {
    $scope.currentTeeth = teeth;
    $scope.actions[$scope.currentTeeth.key] = $scope.actions[$scope.currentTeeth.key] || []; 
  };
  $scope.add = function () {
    $scope.teeth = Object.assign(
      {},
      $scope.teeth,
      {index: $scope.actions[$scope.currentTeeth.key].length, date: moment()}
    );
    $scope.actions[$scope.currentTeeth.key].push($scope.teeth);
    reInitForm();
  };
  $scope.getElements = function (key) {
    return $scope.actions[key];
  };

  function reInitForm() {
    $scope.teeth = {};
    $scope.form.$setPristine();
    $scope.form.$setUntouched();
  }

  $scope.close = function () {
    reInitForm();
    $scope.currentTeeth = undefined;
  };
};

