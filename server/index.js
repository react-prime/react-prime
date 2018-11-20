const express = require('express');
const path = require('path');
const compress = require('compression');

const app = express();
app.use(compress());
app.use(express.static(path.resolve(__dirname)));

const port = process.env.PORT || 3000;

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
