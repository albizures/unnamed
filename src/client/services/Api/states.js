
module.exports = function ($http, getData) {
  const a = {};
  // ################ POST's ################
  a.post = state => getData($http.post('/api/states', state));

  // ################ GET's ################
  a.getByTable = (table) => getData($http.get('/api/states/table/' + table));
  a.getAll = () => getData($http.get('/api/states'));
  a.getOne = id => getData($http.get('/api/states/' + id));

  // ################ PUT's ################
  a.put = (id, state) => getData($http.put('/api/states/' + id, state));

  // ################ DELETE's ################
  a.delete = id => getData($http.delete('/api/states/' + id));

  return a;
};