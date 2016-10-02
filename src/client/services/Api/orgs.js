
module.exports = function ($http, getData) {
  const a = {}; 
  // ################ POST's ################
  a.post = org => getData($http.post('/api/orgs', org));

  // ################ GET's ################
  a.getAll = () => getData($http.get('/api/orgs'));
  a.getOne = id => getData($http.get('/api/orgs/' + id));

  // ################ PUT's ################
  a.put = (id, org) => getData($http.put('/api/orgs/' + id, org));

  // ################ DELETE's ################
  a.delete = id => getData($http.delete('/api/orgs/' + id));


  return a;
};