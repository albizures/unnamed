
module.exports = function ($http) {
  const a = {}; 
  // ################ POST's ################
  a.post = state => $http.post('/api/states', state).then(result => result.data);

  // ################ GET's ################
  a.getAll = () => $http.get('/api/states').then(result => result.data);;
  a.getOne = id => $http.get('/api/states/' + id).then(result => result.data);;

  // ################ PUT's ################
  a.put = (id, state) => $http.put('/api/states/' + id, state).then(result => result.data);;

  // ################ DELETE's ################
  a.delete = id => $http.delete('/api/states/' + id).then(result => result.data);;

  return a;
};