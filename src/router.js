var handler = require('./handler');

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
    try {
      routes['default'](req, res);
    } catch (err) {
      routes['404'](req, res);
    }
  }
}

module.exports = router;
