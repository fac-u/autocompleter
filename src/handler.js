var fs = require('fs');
var path = require('path');

var handler = {};

var htmlHeaders = {
  'content-type': 'text/html'
};

var cssHeaders = {
  'content-type': 'text/css'
};

var jsHeaders = {
  'content-type': 'text/js'
};

handler.home = function (req, res) {
  res.writeHead(200, htmlHeaders);
  var filepath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filepath, function (err, data) {
    if (err) console.log(err);
    res.end(data);
  });
};

handler.resetCss = function (req, res) {
  res.writeHead(200, cssHeaders);
  var filepath = path.join(__dirname, '..', 'public', 'reset.css');
  fs.readFile(filepath, function (err, data) {
    if (err) console.log(err);
    res.end(data);
  });
};

handler.mainCss = function (req, res) {
  res.writeHead(200, cssHeaders);
  var filepath = path.join(__dirname, '..', 'public', 'main.css');
  fs.readFile(filepath, function (err, data) {
    if (err) console.log(err);
    res.end(data);
  });
};

handler.mainJs = function (req, res) {
  res.writeHead(200, jsHeaders);
  var filepath = path.join(__dirname, '..', 'public', 'main.js');
  fs.readFile(filepath, function (err, data) {
    if (err) console.log(err);
    res.end(data);
  });
};

handler.reqJs = function (req, res) {
  res.writeHead(200, jsHeaders);
  var filepath = path.join(__dirname, '..', 'public', 'request.js');
  fs.readFile(filepath, function (err, data) {
    if (err) console.log(err);
    res.end(data);
  });
};


handler.getSuggestions = function (req, res) {
  res.writeHead(200, htmlHeaders);
  console.log(req);
  var suggestions;
  res.end(suggestions);
};

handler.notFound = function (req, res) {
  res.writeHead(200, htmlHeaders);
  res.end('404: page not found');
};

module.exports = handler;
