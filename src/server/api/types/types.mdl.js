const connect = require("../../components/connect.js");

/**
 * getOne
 * 
 * @desc devuelve un solo elemento
 * @param {Number} id
 */
exports.getOne = function(id) {
  return connect.query('call sp_sel_sys_type_id( ? )', id)
    .then(rows => rows[0][0]);
};

/**
 * getAll
 * 
 * @desc devuelve todos los tipos
 */
exports.getAll = function() {
  return connect.query('call sp_sel_sys_type')
    .then(rows => rows[0]);
};

/**
 * post
 * 
 * @desc agrega un nuevo tipo
 * @param {Object[]} data [name, description, table]
 */
exports.post = function(data) {
  return connect.insert(
    'fn_ins_sys_type( ?, ?, ? )',
    data
  ).then(rows => rows[0].id);
};

/**
 * delete
 * 
 * @desc elimina un tipo
 * @param {Number} id
 */
exports.delete = function (id) {
  return connect.query(
    'call sp_del_sys_type ( ? )',
    id
  ).then(rows => rows[0]);
};

/**
 * put
 * 
 * @desc edita un tipo
 * @param {Object[]} data [id, name, description, table]
 */
exports.put = function (data) {
  return connect.query(
    'call sp_upd_sys_type ( ?, ?, ?, ?)',
    data
  ).then(rows => rows[0]);
};