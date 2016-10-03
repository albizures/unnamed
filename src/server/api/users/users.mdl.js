const connect = require("../../components/connect.js");

/**
 * getOne
 * 
 * @desc devuelve un solo elemento
 * @param {Number} id
 */
exports.getOne = function(id) {
  return connect.query('call sp_sel_sys_user_id( ? )', id)
    .then(rows => rows[0][0]);
};

/**
 * getAll
 * 
 * @desc devuelve todos las organizaciones
 */
exports.getAll = function() {
  return connect.query('call sp_sel_sys_user')
    .then(rows => rows[0]);
};

/**
 * post
 * 
 * @desc agrega una nueva organizacion
 * @param {Object[]} data [first_name, last_name, email, pass, id_org, id_role, id_state]
 */
exports.post = function(data) {
  return connect.insert(
    'fn_ins_sys_user( ?, ?, ?, ?, ?, ?, ? )',
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
    'call sp_del_sys_user ( ? )',
    id
  ).then(rows => rows[0]);
};

/**
 * put
 * 
 * @desc edita un rol
 * @param {Object[]} data [id, first_name, last_name, email, id_org, id_role, id_state]
 */
exports.put = function (data) {
  return connect.query(
    'call sp_upd_sys_user ( ?, ?, ?, ?, ?, ?, ?)',
    data
  ).then(rows => rows[0]);
};