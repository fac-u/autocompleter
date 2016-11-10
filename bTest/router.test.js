var test = require('tape');
var router = require('../src/router.js');
var add = router.add;
var subtract = router.subtract;
var divide = router.divide;
var multiply = router.multiply;

test('Check tape is working with a simple passing test', function (t) {
  t.pass('router success');
  t.end();
});

test('Check that add test fails as expected', function (t) {
  t.equal(add(1, 2), 3);
  t.end();
});

test('Check that subtract works', function (t) {
  t.equal(subtract(3, 2), 1);
  t.end();
});

test('Check that divide works', function (t) {
  t.equal(divide(8, 2), 4);
  t.end();
});

test('Check that multiply works', function (t) {
  t.equal(multiply(2, 2), 4);
  t.end();
});
