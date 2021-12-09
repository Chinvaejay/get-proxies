const fs = require('fs');
const express = require('express');
const { getConfig } = require('./getConfig');
const { getProxies } = require('./getProxies');

const app = express();
const port = process.env.PORT || 3003;

getProxies();

app.get('/', async (_, res) => {
  if (req.query.refresh) {
    try {
      await getProxies();
    } catch (e) {
      res.json(e);
    }
  }
  let txt;
  try {
    txt = fs.readFileSync('./r.yaml');
  } catch (e) {
    txt = '请先获取配置';
    await getProxies();
    res.redirect('/');
  }
  res.send(txt);
});

app.get('/get-config', async (req, res) => {
  if (req.query.refresh) {
    try {
      await getProxies();
    } catch (e) {
      res.json(e);
    }
  }
  const config = await getConfig();
  res.send(config);
});

app.listen(port);
