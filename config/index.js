'use strict';

var fs = require('fs');

var bodyParser = require('body-parser');
var morgan = require('morgan');
var session      = require('express-session');

module.exports = function(express, app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(require('express-domain-middleware'));
  app.use(express.static('public'));
  var accessLogStream = fs.createWriteStream('logs/access.log', {flags: 'a'})
  app.use(morgan('dev', {stream: accessLogStream}));
  
  app.use(session({ secret: 'process.env.SESSION_SECRET', resave: false, saveUninitialized: false  }));
  return {
    port: process.env.PORT || 3000
  }
}
