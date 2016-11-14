var http = require('http');
var router = require('./src/router.js');
var dictionary = require('./src/read-dictionary.js');

var server = http.createServer(router);
var port = process.env.PORT || 3000;

function startServer () {
  dictionary.readDictionary();
  server.listen(port, function () {
    console.log('FACU server is listening on port ' + port + ' and is ready for requests.');
  });
}

startServer();

setInterval(function () {
    http.get("http://facu-autocompleter.herokuapp.com");
}, 300000); // every 5 minutes (300000)
