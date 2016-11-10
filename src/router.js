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
