const connect = require("../../components/connect.js");

/**
 * getOne
 * 
 * @desc devuelve un solo elemento
 * @param {Number} id
 */
exports.getOne = function(id) {
  return connect.query('call sp_sel_sys_option_id( ? )', id)
    .then(rows => rows[0][0]);
};

/**
 * getAll
 * 
 * @desc devuelve todos las organizaciones
 */
exports.getAll = function() {
  return connect.query('call sp_sel_sys_option')
    .then(rows => rows[0]);
};

/**
 * post
 * 
 * @desc agrega una nueva organizacion
 * @param {Object[]} data [name, title, description, order, id_type, id_state]
 */
exports.post = function(data) {
  return connect.insert(
    'fn_ins_sys_option( ?, ?, ?, ?, ?, ? )',
    data
  ).then(rows => rows[0].id);
};

/**
 * delete
 * 
 * @desc elimina una organizacion
 * @param {Number} id
 */
exports.delete = function (id) {
  return connect.query(
    'call sp_del_sys_option ( ? )',
    id
  ).then(rows => rows[0]);
};

/**
 * put
 * 
 * @desc edita un rol
 * @param {Object[]} data [id, name, title, description, order, id_type, id_state]
 */
exports.put = function (data) {
  return connect.query(
    'call sp_upd_sys_option ( ?, ?, ?, ?, ?, ?, ?)',
    data
  ).then(rows => rows[0]);
};