var handler = require('./handler')


function router(req,res) {
  if(req.url === '/') {
    handler.index(req,res);
  }
}

module.exports = router
