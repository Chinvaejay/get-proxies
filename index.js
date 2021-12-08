const express = require('express');

const app = express();
const port = process.env.PORT || 3003;

app.get('/get-proxies', (_, res) => {
  res.send('123');
});

app.get('/get-config', (_, res) => {
  res.send('345');
});

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
