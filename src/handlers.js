// exporting all handler functions to be able to be called in router.
var handlers = module.exports = {};

var fs = require('fs');

handlers.my_function1 = function () {
  console.log('handler function 1');
};

handlers.defaultResponse = function (response, endpoint, extension) {
};
