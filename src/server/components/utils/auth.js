
exports.isLogin = function (req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) return next();
  res.status(401).end();
};