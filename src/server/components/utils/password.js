
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.generate = password => new Promise((resolve, reject) => {
  bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
      return reject;
    }
    resolve(hash);
  });
});

exports.compare = (password, hash) => new Promise(resolve => {
  bcrypt.compare(password, hash, function(err, res) {
    if (err) {
      return resolve(false);
    }
    resolve(res);
  });
});
