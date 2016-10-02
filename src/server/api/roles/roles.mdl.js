const connect = require("../../components/connect.js");

/**
 * getOne
 * 
 * @desc devuelve un solo elemento
 * @param {Number} id
 */
exports.getOne = function(id) {
  return connect.query('call sp_sel_sys_role_id( ? )', id)
    .then(rows => rows[0][0]);
};

/**
 * getAll
 * 
 * @desc devuelve todos los roles
 */
exports.getAll = function() {
  return connect.query('call sp_sel_sys_role')
    .then(rows => rows[0]);
};

/**
 * post
 * 
 * @desc agrega un nuevo rol
 * @param {Object[]} data [name, description]
 */
exports.post = function(data) {
  return connect.insert(
    'fn_ins_sys_role( ?, ? )',
    data
  ).then(rows => rows[0].id);
};

/**
 * delete
 * 
 * @desc elimina un rol
 * @param {Number} id
 */
exports.delete = function (id) {
  return connect.query(
    'call sp_del_sys_role ( ? )',
    id
  ).then(rows => rows[0]);
};

/**
 * put
 * 
 * @desc edita un rol
 * @param {Object[]} data [id, name, description]
 */
exports.put = function (data) {
  return connect.query(
    'call sp_upd_sys_role ( ?, ?, ?)',
    data
  ).then(rows => rows[0]);
};