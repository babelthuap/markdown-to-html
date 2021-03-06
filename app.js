'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');

var app = express();
app.set('view engine', 'jade');



// enable POST body parsing
app.use(bodyParser.urlencoded({ extended: true }));

// log in the console
app.use(morgan('dev'));

// allow static pages to access the resources they need
app.use(express.static(__dirname + '/public'));



// display the index page when a user accessess the server from a browser
app.get('/', function(req, res) {
  res.render('index');
});

// receive markdown, convert it to HTML, respond with resulting HTML
app.post('/markdown', function(req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send( marked(req.body.string) );
});



app.listen(PORT, function(){
  console.log('listening on port %s', PORT);
});
