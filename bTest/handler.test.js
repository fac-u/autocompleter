var test = require('tape');
var handler = require('../src/handler.js');
var fs = require('fs');
var path = require('path');

var req = {
  home: {url : '/'},
  resCss: {url :'/reset.css'},
  mainCss: {url :'/main.css'},
  mainJs: {url :'/main.js'},
  requestJs: {url :'/request.js'},
  sug: {url :'/get_suggestions'},
  err: {url :'404'}
};

test('Check tape is working with a simple passing test', function (t) {
  t.pass('handler success');
  t.end();
});

test('Home Handler gets index.html when given home path', function(t) {
    var res = {
        writeHead: function() {},
        end: function(data) {
            t.equal(data.toString(), fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html')).toString(), "Router & home handler Passed!");
            t.end();
        }
    };
    handler.home(req.home, res);
});
