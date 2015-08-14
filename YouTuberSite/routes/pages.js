var http = require('http');
var querystring = require('querystring');

module.exports = function (app) {
  app.get('/', function (req, res) {
    var videos = [];

    http.get('http://localhost:3000/api/list/UC9DiuD3z0btMOAMG_FvDRag', function (response) {
      var body = '';
        response.on('data', function(d) {
          body += d;
        });
      response.on('end', function() {
        data = JSON.parse(body);
        for (var i = 0; i < data.items.length; i++) {
          video = generate_video(data.items[i]);
          if (video) {
            videos.push(video);
          }
        }
        res.render('index', {
          videos: videos
        });
      });
    }).on('error', function(e) {
      console.error(e);
      res.send(e);
    });
  });
}

function generate_video (vidJson) {
  var video = {};
  if (vidJson.id.kind == "youtube#video") {
    video.name = vidJson.snippet.title;
    video.url = 'http://y2u.be' + vidJson.id.videoId;
    video.thumbnailUrl = vidJson.snippet.thumbnails.medium.url;
    return video;
  } else {
    return false;
  }
}