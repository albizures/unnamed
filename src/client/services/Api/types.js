

module.exports = function ($http) {
  const a = {}; 
  // ################ POST's ################
  a.post = type => $http.post('/api/types', type).then(result => result.data);

  // ################ GET's ################
  a.getAll = () => $http.get('/api/types').then(result => result.data);
  a.getOne = id => $http.get('/api/types/' + id).then(result => result.data);

  // ################ PUT's ################
  a.put = (id, type) => $http.put('/api/types/' + id, type).then(result => result.data);

  // ################ DELETE's ################
  a.delete = id => $http.delete('/api/types/' + id).then(result => result.data);

  return a;
};