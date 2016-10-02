
module.exports = function ($http, getData) {
  const a = {}; 
  // ################ POST's ################
  a.post = option => getData($http.post('/api/options', option));

  // ################ GET's ################
  a.getAll = () => getData($http.get('/api/options'));
  a.getOne = id => getData($http.get('/api/options/' + id));

  // ################ PUT's ################
  a.put = (id, option) => getData($http.put('/api/options/' + id, option));

  // ################ DELETE's ################
  a.delete = id => getData($http.delete('/api/options/' + id));


  return a;
};