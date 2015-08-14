module.exports = function (app) {
	app.get('/api/list/:channel', function (req, res) {
		var channel = req.params.channel;
		console.log(req.params.channel);
		res.send(channel);
	});
};