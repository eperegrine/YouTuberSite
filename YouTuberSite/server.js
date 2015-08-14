var express = require('express');
var body_parser = require('body-parser');
var swig = require('swig');

var app = express();

//FOR DEBUGGING
app.set('view cache', false);
swig.setDefaults({ cache: false });

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

//app.get('/', function (req, res) {
	//res.send('A work in prgoress!');
	//res.render('index', {});
//});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});

require('./routes/api.js')(app);
require('./routes/pages.js')(app);