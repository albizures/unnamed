const model = require('./users.mdl.js');
const password = require('../../components/utils/password.js');


exports.getOptions = function (req, res) {
  model.getOptions(req.user.id_user)
  .then(result => res.json(result))
  .catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error';
    res.status(500).json(err);
  });
};

exports.getAll = function (req, res) {
  model.getAll().then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar los usuarios, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.getOne = function (req, res) {
  model.getOne(req.params.id).then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar el usuario, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.post = function (req, res) {
  password.generate(req.body.password).then(hash => [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    hash,
    req.body.id_org,
    req.body.id_role,
    req.body.id_state
  ]).then(model.post).then(result => {
    req.body.id_role = result;
    res.status(201).json(req.body);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al guardar la usuario, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.delete = function (req, res) {
  model.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo eliminar el usuario';
      res.status(500).json(err);
    });
};

exports.put = function (req, res) {
  model.put([
    req.params.id,
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.id_org,
    req.body.id_role,
    req.body.id_state
  ]).then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo guardar el usuario';
      res.status(500).json(err);
    });
};