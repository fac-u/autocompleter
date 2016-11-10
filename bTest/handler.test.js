var test = require('tape');
var handler = require('../src/handler.js');

test('Check tape is working with a simple passing test', function (t) {
  t.pass('handler success');
  t.end();
});
