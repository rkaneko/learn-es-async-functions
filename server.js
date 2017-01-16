'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = new express();
var port = 3001;

app.use(express.static(path.join(__dirname, 'src')));
// json config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function sendJson(req, res, json) {
  res.contentType('application/json');
  res.json(json);
}

// sample
app.get('/apis/example1', function(req, res) {
  sendJson(req, res, {message: 'hello Bob!'});
})

app.post('/apis/foo', function(req, res) {
  var bar = req.body.bar;
  console.log(bar);

  sendJson(req, res, 'foo.json');
})

app.get(/^(?!\/apis\/).*$/, function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})
