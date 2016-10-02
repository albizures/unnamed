const model = require('./states.mdl.js');

exports.getAll = function (req, res) {
  model.getAll().then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar los estados, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.getOne = function (req, res) {
  model.getOne(req.params.id).then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar el estado, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.post = function (req, res) {
  model.post([
    req.body.name,
    req.body.description,
    req.body.table_name
  ]).then(result => {
    req.body.id_role = result;
    res.status(201).json(req.body);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al insertar el estado, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.delete = function (req, res) {
  model.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo eliminar el estado';
      res.status(500).json(err);
    });
};

exports.put = function (req, res) {
  model.put([req.params.id, req.body.name, req.body.description, req.body.table_name])
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo guardar el estado';
      res.status(500).json(err);
    });
};