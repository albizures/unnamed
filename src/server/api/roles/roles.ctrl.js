const model = require('./roles.mdl.js');


exports.getOptions = function (req, res) {
  model.getOptions(req.params.id).then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar las opciones del role, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.getAll = function (req, res) {
  model.getAll().then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar los roles, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.getOne = function (req, res) {
  model.getOne(req.params.id).then(result => {
    res.json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al consultar al rol, intentelo de nuevo';
    res.status(500).json(err);
  });
};


exports.postOption = function (req, res) {
  model.postOption([
    req.body.id_role,
    req.body.id_option
  ]).then(result => {
    res.status(201).json(result);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al insertar el rol, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.post = function (req, res) {
  model.post([
    req.body.name,
    req.body.description
  ]).then(result => {
    req.body.id_role = result;
    res.status(201).json(req.body);
  }).catch(err => {
    console.log(err);
    err.userMsg = 'Ocurrio un error al insertar el rol, intentelo de nuevo';
    res.status(500).json(err);
  });
};

exports.deleteOption = function (req, res) {
  model.deleteOption([
    req.params.id,
    req.params.option
  ]).then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo eliminar la opcion del rol';
      res.status(500).json(err);
    });
};

exports.delete = function (req, res) {
  model.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo eliminar el role';
      res.status(500).json(err);
    });
};

exports.put = function (req, res) {
  model.put([req.params.id, req.body.name, req.body.description])
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      err.userMsg = 'No se pudo guardar el role';
      res.status(500).json(err);
    });
};