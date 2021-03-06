const model = require('./types.mdl.js');


exports.getByTable = function (req, res) {
  model.getByTable(req.params.table).then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar los tipos, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.getAll = function (req, res) {
  model.getAll().then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar los tipos, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.getOne = function (req, res) {
  model.getOne(req.params.id).then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar al tipo, intentelo de nuevo';
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
    err.userMsg = 'Ocurrio un error al insertar el tipo, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.delete = function (req, res) {
  model.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo eliminar el tipo';
      res.status(500).json(err);
    });
};

exports.put = function (req, res) {
  model.put([req.params.id, req.body.name, req.body.description, req.body.table_name])
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo guardar el tipo';
      res.status(500).json(err);
    });
};