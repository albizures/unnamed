const router = require('express').Router();

router.use('/users/', require('./users/'));
router.use('/roles/', require('./roles/'));
router.use('/states/', require('./states/'));
router.use('/types/', require('./types/'));
router.use('/orgs/', require('./orgs/'));

router.use('/*', function (req, res) {
  res.status(404).end();
});

module.exports = router;