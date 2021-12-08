const fs = require('fs');
const express = require('express');
const { getConfig } = require('./getConfig');
const { run } = require('./getProxies');

const app = express();
const port = process.env.PORT || 3003;

app.get('/', (_, res) => {
  let txt;
  try {
    txt = fs.readFileSync('./r.yaml');
  } catch (e) {
    txt = '请先获取配置';
  }
  res.send(txt);
});
app.get('/get-proxies', async (_, res) => {
  await run();
  res.send('获取成功');
});

app.get('/get-config', async (_, res) => {
  const config = await getConfig();
  res.send(config);
});

app.listen(port);
