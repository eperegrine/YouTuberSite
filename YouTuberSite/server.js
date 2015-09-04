var express = require('express');
var body_parser = require('body-parser');
var swig = require('swig');

var app = express();

//FOR DEBUGGING
app.set('view cache', false);
swig.setDefaults({ cache: false });

//Configure templating
app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');
app.set('views', __dirname + '/templates');

//Allows static files
app.use(express.static('public'));

//Redirect static file from subdomain
app.get('/watch/:type/:file', function (req, res) {
	res.redirect('/' + req.params.type + '/' + req.params.file);
})

//Set the api key
app.locals.key = 'AIzaSyCtBppALGmSX13Cn8lLSxYHs486cmSJadE';
//Set the chosen channel Id
app.locals.channelId = 'UCGjylN-4QCpn8XJ1uY-UOgA';

//Refactor requests
app.use(body_parser.urlencoded({
	extended: false
}));

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});

require('./routes/api.js')(app);
require('./routes/pages.js')(app);
require('./routes/search.js')(app);