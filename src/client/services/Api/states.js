
module.exports = function ($http) {
  const a = {}; 
  // ################ POST's ################
  a.post = state => $http.post('/api/states', state);

  // ################ GET's ################
  a.getAll = () => $http.get('/api/states');
  a.getOne = id => $http.get('/api/states/' + id);

  // ################ PUT's ################
  a.put = (id, state) => $http.get('/api/states/' + id, state);

  // ################ DELETE's ################
  a.delete = id => $http.get('/api/states/' + id);

  return a;
};