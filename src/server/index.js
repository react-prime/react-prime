import express from 'express';
import path from 'path';
import compress from 'compression';
import { port } from 'config';

const app = express();
app.use(compress());
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.use((req, res) => {
  res.sendFile('/index.html');
});

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
