

module.exports = function ($http) {
  const a = {};
  // ################ POST's ################
  a.post = user => $http.post('/api/users', user);

  // ################ GET's ################
  a.getAll = () => $http.get('/api/users');
  a.getOne = id => $http.get('/api/users/' + id);

  // ################ PUT's ################
  a.put = (id, user) => $http.get('/api/users/' + id, user);

  // ################ DELETE's ################
  a.delete = id => $http.get('/api/users/' + id);

  return a;
};