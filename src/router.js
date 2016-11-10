var handler = require('./handler');

var routes = {
  '/': handler.home,
  '/reset.css': handler.resetCss,
  '/main.css': handler.mainCss,
  '/main.js': handler.mainJs,
  '/get_suggestions': handler.getSuggestions,
  '404': handler.notFound
};

function router (req, res) {
  console.log('Request coming in for endpoint: ' + req.url);
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    routes['404'](req, res);
  }
}

module.exports = router;
