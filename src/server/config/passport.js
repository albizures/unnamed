const passport = require('passport');
// const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
// const config = require('./environment');
const userModel = require('../api/users/users.mdl.js');
const password = require('../components/utils/password.js');

function LocalStrategyCallback(email, pass, done) {
  userModel.getOneEmailPassword(email).then(user =>{
    if (!user) { return done(null, false); }
    password.compare(pass, user.pass).then( isEqual => {
      if (!isEqual) { return done(null, false); }
      return done(null, user);
    });
  }).catch(err => {
    done(err);
    return done(err);
  });
}

const localStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, LocalStrategyCallback);

const serializeUser = function(user, cb) {
  console.log('serializeUser', user);
  cb(null, user.id_user);
};

const deserializeUser = function(id_user, cb) {
  console.log('deserializeUser', id_user);
  userModel.getOne(id_user)
    .then(user => {
      console.log('getOne');
      return user;
    })
    .then(user => cb(null, user))
    .catch(err => {
      console.log('deserializeUser err', err);
      cb(err);
    });
};

module.exports = function (app) {
  passport.use(localStrategy);
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports.passport = passport;