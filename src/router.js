var handler = require('./handler');
var fs = require('fs');
var path = require('path');

var routes = {
  '/': handler.home,
  '/get_suggestions': handler.getSuggestions,
  'default': handler.default,
  '404': handler.notFound
};

function router (req, res) {
  console.log('Request coming in for endpoint: ' + req.url);
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    fs.lstat(path.join(__dirname, '..', 'public', req.url), function (err, result) {
      if (err) {
        routes['404'](req, res);
      } else {
        routes['default'](req, res);
      }
    });
  }
}

module.exports = router;
