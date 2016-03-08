var express = require('express');
var app = express();

var config = require('./config')(express, app);

app.use('/', require('./app/routes')(express, {}));

app.listen(config.port, function () {
  console.log('Server started on port: %s', config.port);
});


