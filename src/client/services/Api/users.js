

module.exports = function ($http, getData) {
  const a = {};
  // ################ POST's ################
  a.post = user => getData($http.post('/api/users', user));

  // ################ GET's ################
  a.getAll = () => getData($http.get('/api/users'));
  a.getOne = id => getData($http.get('/api/users/' + id));

  // ################ PUT's ################
  a.put = (id, user) => getData($http.put('/api/users/' + id, user));

  // ################ DELETE's ################
  a.delete = id => getData($http.delete('/api/users/' + id));

  return a;
};