

module.exports = function ($http, getData) {
  const a = {};
  
  // ################ POST's ################
  a.post = role => getData($http.post('/api/roles', role));

  // ################ GET's ################
  a.getAll = () => getData($http.get('/api/roles'));
  a.getOne = id => getData($http.get('/api/roles/' + id));

  // ################ PUT's ################
  a.put = (id, role) => getData($http.put('/api/roles/' + id, role));

  // ################ DELETE's ################
  a.delete = id => getData($http.delete('/api/roles/' + id));

  return a;
};