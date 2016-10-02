const model = require('./options.mdl.js');

exports.getAll = function (req, res) {
  model.getAll().then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar las opciones, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.getOne = function (req, res) {
  model.getOne(req.params.id).then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar la opcion, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.post = function (req, res) {
  model.post([
    req.body.name,
    req.body.title,
    req.body.description,
    req.body.order,
    req.body.id_type,
    req.body.id_state
  ]).then(result => {
    req.body.id_role = result;
    res.status(201).json(req.body);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al insertar la opcion, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.delete = function (req, res) {
  model.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo eliminar la opcion';
      res.status(500).json(err);
    });
};

exports.put = function (req, res) {
  model.put([
    req.params.id,
    req.body.name,
    req.body.title,
    req.body.description,
    req.body.order,
    req.body.id_type,
    req.body.id_state
  ]).then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo guardar la opcion';
      res.status(500).json(err);
    });
};