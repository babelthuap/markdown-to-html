'use strict';

var PORT = 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');


var app = express();
app.set('view engine', 'jade');



// enable POST body parsing
app.use(bodyParser.urlencoded({ extended: true })); // form data - for webpage
// app.use(bodyParser.json());

// log in the console
app.use(morgan('combined'));

// allow static pages to access the resources they need
app.use(express.static('public'));



// display the index page when a user accessess the server from a browser
app.get('/', function(req, res) {
  res.render('index');
});

// receive markdown, convert it to HTML, respond with resulting HTML
app.post('/markdown', function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log('POST REQUEST:', req);
  res.send( marked(req.body.string) );
});



app.listen(PORT, function(){
  console.log('listening on port %s', PORT);
});
