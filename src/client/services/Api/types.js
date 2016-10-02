

module.exports = function ($http, getData) {
  const a = {}; 
  // ################ POST's ################
  a.post = type => getData($http.post('/api/types', type));

  // ################ GET's ################
  a.getByTable = (table) => getData($http.get('/api/types/table/' + table));
  a.getAll = () => getData($http.get('/api/types'));
  a.getOne = id => getData($http.get('/api/types/' + id));

  // ################ PUT's ################
  a.put = (id, type) => getData($http.put('/api/types/' + id, type));

  // ################ DELETE's ################
  a.delete = id => getData($http.delete('/api/types/' + id));

  return a;
};