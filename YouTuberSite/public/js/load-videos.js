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

			//Handle the page token for load more button
			var nextPage = data.nextPageToken;
			console.log(data.nextPageToken);
			if (nextPage) {
				load_btn.attr('next-page', nextPage);
			} else {
				load_btn.hide('slow');
			}

			//loop through the videos and generate html for them
			var videos = [];

			for (var i = 0; i < data.items.length; i++) {
	          video = generate_video(data.items[i]);
	          if (video) {
	            videos.push(video);
	          }
	        }

	        for (var i = 0; i < videos.length; i++) {
	        	var html = generate_vid_html(videos[i]);
	        	$("#videoList").append(html);
	        	//.find('a:last-child').hide().fadeIn('slow');
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
function generate_vid_html (video) {
	var htmlStr = '<a href="' + 
	video.url + '"> <li class="vid-item"> <h3>'+ 
	video.name + '</h3> <img width="100%" src="' + 
	video.thumbnailUrl + '"></img> </li></a>';
    return htmlStr;
}