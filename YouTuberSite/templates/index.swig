{% extends 'layout.swig' %}

{% block title %}Yotuber Site| Home{% endblock %}

{% block head %}
<style>
    li {
        text-align: center;
        width: 200px;
        border: 1px solid #000;
        display: -moz-inline-stack;
        display: inline-block;
        vertical-align: top;
        margin: 1.5%;
        zoom: 1;
        *display: inline;
    }
</style>
{% endblock %}

{% block content %}
<h1>All videos</h1>
<div id="videoList">
  <ul>
  {% for video in videos %}
  <a href="{{video.url}}">
    <li>
      <h3>{{video.name}}</h3>
      <img width="100%" src="{{video.thumbnailUrl}}"></img>
    </li>
    {% endfor %}
  </ul>
</div>
{% endblock %}