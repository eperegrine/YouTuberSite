{% extends 'layout.swig' %}

{% block title %}Yotuber Site| Watch{% endblock %}

{% block head %}
<script type="text/javascript" src="js/load-videos.js"></script>
{% endblock %}

{% block content %}
<h1>All videos</h1>
<div class="clearfix">
<style type="text/css">
  #player {
    min-height: 390px;
    min-width: 640px;
    width: 100%;
    height: 100%;
  }
</style>
  <iframe id="player" src="https://www.youtube.com/embed/{{video.id}}" frameborder="0" allowfullscreen></iframe>
</div>
{% endblock %}