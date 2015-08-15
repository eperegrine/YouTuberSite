//load-videos.js
//By Tom Peregrine
var load_btn;
var url = '/api/list/UCGjylN-4QCpn8XJ1uY-UOgA';

jQuery(document).ready(function($) {
	load_btn = jQuery('#loadBtn'); 
	load_btn.click(function(event) {
		load_more();
	});
});

function load_more () {
	var token = load_btn.attr('next-page');
	if (token) {
		jQuery.get(url + "?pt=" + token, function(data) {
			console.log(data);
			var nextPage = data.nextPageToken;
			console.log(data.nextPageToken);
			if (nextPage) {
				load_btn.attr('next-page', nextPage);
			} else {
				load_btn.hide('slow');
			}
		});
	} else {
		console.log('load_btn has no attribute next-page')
	}
}

function generate_video (vidJson) {
  var video = {};
  if (vidJson.id.kind == "youtube#video") {
    video.name = vidJson.snippet.title;
    video.url = 'http://y2u.be/' + vidJson.id.videoId;
    video.thumbnailUrl = vidJson.snippet.thumbnails.medium.url;
    return video;
  } else {
    return false;
  }
}