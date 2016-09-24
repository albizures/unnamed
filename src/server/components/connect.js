
const mysql = require('mysql');
const defer = require('./utils/defer.js');
const config = require('../config/environment');

let pool = mysql.createPool(
  Object.assign({}, config.db, {connectionLimit : 10})
);

pool.on('enqueue', function () {
  console.log('**************************************');
  console.log('Waiting for available connection slot');
});
pool.on('error', function () {
  console.log('**************************************');
  console.log('error');
});


exports.query = function (query, data) {
  let {defer, resolve, reject} = defer.createDefer();

  pool.query(query, data, onQuery);

  function onQuery(err, rows) {
    if (err) {
      console.log(query, data, err);
      return reject(err);
    }
    resolve(rows);
  }

  return defer;
};
