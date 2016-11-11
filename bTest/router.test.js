var test = require('tape');
var router = require('../src/router.js');
var fs = require('fs');
var path = require('path');


test('Check tape is working with a simple passing test', function (t) {
  t.pass('router success');
  t.end();
});

var req = {
  home: {url : '/'},
  resCss: {url :'/reset.css'},
  mainCss: {url :'/main.css'},
  mainJs: {url :'/main.js'},
  requestJs: {url :'/request.js'},
  sug: {url :'/get_suggestions'},
  err: {url :'404'}
};

test('Router routes to home handler and home handler reads  file', function(t) {
    var res = {
        writeHead: function() {},
        end: function(data) {
            t.equal(data.toString(), fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html')).toString(), "Router & home handler Passed!");
            t.end();
        }
    };
    router(req.home, res);
});

test('Router routes to default handler and deafault handler reads file', function(t) {
  var res = {
    writeHead: function () {},
    end:  function (data) {
            t.equal(data.toString(), fs.readFileSync(path.join(__dirname, '..', 'public', 'reset.css')).toString(), "Router & default handler Passed!");
            t.end();
          }
  };
  router(req.resCss, res);
});

test('default handler works for js extension also', function(t) {
  var res = {
    writeHead: function () {},
    end:  function (data) {
            t.equal(data.toString(), fs.readFileSync(path.join(__dirname, '..', 'public', 'request.js')).toString(), "Router & handler Passed!");
            t.end();
          }
  };
  router(req.requestJs, res);
});
