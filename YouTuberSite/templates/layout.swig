<!DOCTYPE html>
<html>
	<head>
		<title>{% block title %}Youtuber Site{% endblock %}</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="css/main.css">
		{% block head %} {% endblock %}
	</head>

	<body>
		<div class="titlebar clearfix">
			
		</div>
        {% block content %}{% endblock %}
	</body>
</html>