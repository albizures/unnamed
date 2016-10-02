
module.exports = function ($http) {
  const a = {}; 
  // ################ POST's ################
  a.post = org => $http.post('/api/orgs', org);

  // ################ GET's ################
  a.getAll = () => $http.get('/api/orgs');
  a.getOne = id => $http.get('/api/orgs/' + id);

  // ################ PUT's ################
  a.put = (id, org) => $http.put('/api/orgs/' + id, org);

  // ################ DELETE's ################
  a.delete = id => $http.delete('/api/orgs/' + id);


  return a;
};