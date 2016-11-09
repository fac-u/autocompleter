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
