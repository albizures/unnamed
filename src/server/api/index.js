const router = require('express').Router();
const passport = require('../config/passport.js').passport;

router.use('/users/', require('./users/'));
router.use('/roles/', require('./roles/'));
router.use('/states/', require('./states/'));
router.use('/types/', require('./types/'));
router.use('/orgs/', require('./orgs/'));
router.use('/options/', require('./options/'));

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});
  
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


router.get('/401', function (req, res) {
  res.status(401).end();
});

router.get('/session', function (req, res) {
  console.log(req.user);
  res.json(req.user);
});



router.use('/*', function (req, res) {
  res.status(404).end();
});

module.exports = router;