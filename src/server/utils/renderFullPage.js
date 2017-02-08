const renderFullPage = (html) => (
	`<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>App</title>

			<link rel="stylesheet" type="text/css" href="style.css">
			<meta name="apple-mobile-web-app-capable" content="yes">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
		</head>
		<body>
			<div id="app">${html}</div>
			<script src="bundle.js"></script>
		</body>
	</html>`
);

export default renderFullPage;
