var handler = {
  index: function(req, res){
		res.handler = 'index';
	},
	getSuggestions: function(req, res) {
    res.handler = 'getSuggestions';
	},
	notFound: function(req,res) {
	  res.handler = 'notFound';
	}
}

module.exports = handler
