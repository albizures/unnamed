const express = require('express');
const config = require('./environment');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { dbPromise } = require('../components/connect.js');

module.exports = function (app) {
  if (config.isDev) {
    app.use(require('morgan')('dev'));
  }
  app.use(cookieParser(config.secret));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
    //store: new MongoStore({dbPromise})
  }));
  app.use(favicon('src/favicon.ico'));
  app.use(express.static(config.PUBLIC_PATH));
  app.use(express.static(config.FILES_PATH));
  require('./passport.js')(app);
};
