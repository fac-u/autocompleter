
module.exports = router;

var handlers = require('handlers.js');
var defaultResponse = handlers.defaultResponse;

function router (request, response) {
  console.log('request recieved');
  var endpoint = request.url;

  if (endpoint === '/') {
    defaultResponse(response, './public/index.html', 'html');
  }
}

function add (a, b) {
  var result = a + b;
  return result;
}

function subtract (a, b) {
  var result = a - b;
  return result;
}

function multiply (a, b) {
  var result = a * b;
  return result;
}

function divide (a, b) {
  var result = a / b;
  return result;
}

module.exports = {
  'add': add,
  'subtract': subtract,
  'multiply': multiply,
  'divide': divide
};
