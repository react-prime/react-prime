module.exports = (html = '') => (
    `
        <!DOCTYPE html>
        <meta charset="utf-8">
        <title>React Redux Boilerplate</title>
        ${html ? '<link rel="stylesheet" type="text/css" href="style.css">' : ''}
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <div id="app">${html}</div>
        <script src="${html ? '' : '/dist/'}bundle.js"></script>
    `
);
