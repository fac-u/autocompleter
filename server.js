var http = require('http');
var router = require('./src/router.js');
var port = process.env.PORT || 3000;

var server = http.createServer(router);

server.listen(port);

console.log('FACU server is listening on port ' + port + ' and is ready for requests.');
