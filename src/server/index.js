import express from 'express';
import path from 'path';
import compress from 'compression';
import { port } from 'config';
import fs from 'fs';

const app = express();
app.use(compress());
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.use((req, res) => {
  const htmlBuffer = fs.readFileSync(path.join(__dirname, '../../dist', 'index.html'));
  res.send(htmlBuffer.toString());
});

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
