

/*@ngInject*/
module.exports = function notFound ($stateProvider) {
  $stateProvider.state('404', {
    template: require('./404.pug')()
  });
};
