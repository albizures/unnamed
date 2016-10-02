const connect = require("../../components/connect.js");

/**
 * getOne
 * 
 * @desc devuelve un solo elemento
 * @param {Number} id
 */
exports.getOne = function(id) {
  return connect.query('call sp_sel_sys_state_id( ? )', id)
    .then(rows => rows[0][0]);
};

/**
 * getAll
 * 
 * @desc devuelve todos los estados
 */
exports.getAll = function() {
  return connect.query('call sp_sel_sys_state')
    .then(rows => rows[0]);
};

/**
 * post
 * 
 * @desc agrega un nuevo estado
 * @param {Object[]} data [name, description, table]
 */
exports.post = function(data) {
  return connect.insert(
    'fn_ins_sys_state( ?, ?, ? )',
    data
  ).then(rows => rows[0].id);
};


/**
 * delete
 * 
 * @desc elimina un estado
 * @param {Number} id
 */
exports.delete = function (id) {
  return connect.query(
    'call sp_del_sys_state ( ? )',
    id
  ).then(rows => rows[0]);
};

/**
 * put
 * 
 * @desc edita un estado
 * @param {Object[]} data [id, name, description, table]
 */
exports.put = function (data) {
  return connect.query(
    'call sp_upd_sys_state ( ?, ?, ?, ?)',
    data
  ).then(rows => rows[0]);
};