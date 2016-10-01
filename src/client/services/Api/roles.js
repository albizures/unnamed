

module.exports = function ($http) {
  const a = {}; 
  // ################ POST's ################
  a.post = role => $http.post('/api/roles', role).then(result => result.data);;

  // ################ GET's ################
  a.getAll = () => $http.get('/api/roles').then(result => result.data);
  a.getOne = id => $http.get('/api/roles/' + id).then(result => result.data);;

  // ################ PUT's ################
  a.put = (id, role) => $http.put('/api/roles/' + id, role).then(result => result.data);;

  // ################ DELETE's ################
  a.delete = id => $http.delete('/api/roles/' + id).then(result => result.data);;

  return a;
};