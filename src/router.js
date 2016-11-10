

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




function router(req,res) {
  if(req.url === '/') {
    handler.index(req,res);
  }
}

module.exports = router
