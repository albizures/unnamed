const router = require('express').Router();

router.use('/users/', require('./users/'));

router.use('/*', function (req, res) {
  res.status(404).end();
});

module.exports = router;