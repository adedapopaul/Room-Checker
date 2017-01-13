
var express = require('express');
var app = express();
app.listen('8080');
console.log('App listening on port 8080');
app.use(express.static('public'));