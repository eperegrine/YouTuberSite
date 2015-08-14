var http = require('https');
var querystring = require('querystring');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index', {
      videos: [
        {
          name: 'video',
          url: 'http://y2u.be/j4dMnAPZu70',
          thumbnailUrl: 'http://i3.ytimg.com/vi/j4dMnAPZu70/default.jpg'
        },
        {
          name: 'video2',
          url: 'http://y2u.be/j4dMnAPZu70',
          thumbnailUrl: 'http://i3.ytimg.com/vi/j4dMnAPZu70/default.jpg'
        }

      ]
    });
  });
}