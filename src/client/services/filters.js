


module.exports = function (APP) {
  APP.filter(albTable.name, albTable);
};

/*@ngInject*/
function albTable() {
  return (rows, [filter, ...props]) => {
    if (!filter) {
      return rows;
    }
    filter = new RegExp(filter, 'i');

    function eachRow (row) {
      var valid = false;
      for (var index = 0; index < props.length; index++) {
        var prop = props[index];
        valid = valid || filter.test(row[prop]);
        if (valid) {
          return true;
        }
      }
      return false;
    }

    return rows.filter(eachRow);
  };
}
