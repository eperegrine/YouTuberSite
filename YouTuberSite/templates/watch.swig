{% extends 'layout.swig' %}

{% block title %}Yotuber Site| Watch{% endblock %}

{% block head %}
<script type="text/javascript" src="../js/load-videos.js"></script>
{% endblock %}

{% block content %}
<h1>All videos</h1>
<div class="clearfix">
  <iframe id="player" height="430px" width="690px"  src="https://www.youtube.com/embed/{{video.id}}" frameborder="0" allowfullscreen></iframe>
</div>
<script type="text/javascript">
  jQuery(document).ready(function($) {
    var player = $("#player");
    player.width(screen.width * 0.95);
    player.height(player.width() * 0.56);
  });
</script>
{% endblock %}