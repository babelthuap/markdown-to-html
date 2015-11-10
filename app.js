'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');



// enable POST body parsing
// app.use(bodyParser.urlencoded({ extended: true })); // form data - for webpage
app.use(bodyParser.json());

// log in the console
app.use(morgan('combined'));

// display the index page when a user accessess the server from a browser
app.get('/', function(req, res) {
  res.render('index');
});


app.listen(3000);
