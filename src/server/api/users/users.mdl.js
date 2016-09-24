const connect = require("../../components/connect.js");

exports.getOne = function(id, cb) {
  return connect.query(
    'call sp_sel_seg_user_id( ? )',
    id
  )
  .then(rows => rows[0])
  .catch(err => {
    err.userMsg = 'Ocurrio un error al consultar al usuario, intentelo de nuevo';
    return err;
  });
};
