<!DOCTYPE html>
<html>
	<head>
		<title>{% block title %}Youtuber Site{% endblock %}</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="css/main.css">
		{% block head %} {% endblock %}
	</head>

	<body>
		<header>
			<div class="titlebar">
				<div class="right search">
					<input type="text" id="search-box">
					<button>SUBMIT</button>
				</div>
				<h1>Dan and Phil</h1>
			</div>
		</header>
        {% block content %}{% endblock %}
	</body>
</html>