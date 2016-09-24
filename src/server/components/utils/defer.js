

exports.createDefer = function () {
  let resolve, reject;
  let defer = new Promise((_resolve, _reject) =>{
    resolve = _resolve;
    reject = _reject;
  });
  return {defer, resolve, reject};
};