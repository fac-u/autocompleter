var http = require('http');
var router = require('./src/router.js');

var server = http.createServer(router);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('FACU server is to port ' + port + ' and is ready for requests.');
});
