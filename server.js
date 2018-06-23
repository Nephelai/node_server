process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();
app.listen(6092);
module.exports = app;

console.log('Server running at http://13.209.3.98:6092');