const renderFullPage = (html) => (
    `
        <meta charset="utf-8">
        <title>React Redux Boilerplate</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <div id="app">${html}</div>
        <script src="bundle.js"></script>
    `
);

export default renderFullPage;
