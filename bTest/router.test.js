var test = require('tape');
var router = require('../src/router.js');

test('Check tape is working with a simple passing test', function (t) {
  t.pass('router success');
  t.end();
});

test('')

// test('Check that router calls handler.index() if url equals /', function (t) {
//   req.url = '/';
//   router(req,res);
//   t.equal(res.handler, 'index');
//   t.end();
// });
//
// test('Check that router calls handler.index() if url equals /', function (t) {
//   req.url = '/';
//   router(req,res);
//   t.equal(res.handler, 'index');
//   t.end();
// });
