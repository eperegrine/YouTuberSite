var express = require('express');
var body_parser = require('body-parser');
var swig = require('swig');

var app = express();

//Configure templating
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');

//Allows static files
app.use(express.static('public'));

//Refactor requests
app.use(body_parser.urlencoded({
	extended: false
}));

app.get('/', function (req, res) {
	res.send('A work in prgoress!');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});