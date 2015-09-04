var http = require('http');

module.exports = function (app) {
	app.get('/api/search/:term', function (req, res) {
		var term = req.params.term;
		console.log(term);
		res.send(term);
	});
}