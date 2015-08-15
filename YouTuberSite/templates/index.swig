{% extends 'layout.swig' %}

{% block title %}Yotuber Site| Home{% endblock %}

{% block head %}
{% endblock %}

{% block content %}
<h1>All videos</h1>
<div id="videoList">
  <ul>
  {% for video in videos %}
  <a href="{{video.url}}">
    <li class="vid-item">
      <h3>{{video.name}}</h3>
      <img width="100%" src="{{video.thumbnailUrl}}"></img>
    </li>
    {% endfor %}
  </ul>
</div>
{% endblock %}