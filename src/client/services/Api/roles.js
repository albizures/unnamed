

module.exports = function ($http, getData) {
  const a = {};
  
  // ################ POST's ################
  a.post = role => getData($http.post('/api/roles', role));
  a.postOption = (id_role, id_option) => getData($http.post('/api/roles/option', {id_role, id_option}));

  // ################ GET's ################
  a.getAll = () => getData($http.get('/api/roles'));
  a.getOne = id => getData($http.get('/api/roles/' + id));
  a.getOptions = id => getData($http.get('/api/roles/' + id + '/options'));

  // ################ PUT's ################
  a.put = (id, role) => getData($http.put('/api/roles/' + id, role));

  // ################ DELETE's ################
  a.delete = id => getData($http.delete('/api/roles/' + id));
  a.deleteOption = (id_role, id_option) => getData($http.delete('/api/roles/' + id_role + '/option/' + id_option));

  return a;
};