const express = require('express');

const app = express();

app.get('/get-proxies', (_, res) => {
  res.send('123');
});

app.get('/get-config', (_, res) => {
  res.send('345');
});

app.listen(3003, () => {
  console.log(`http://127.0.0.1:3003`);
});
