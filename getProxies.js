const fs = require('fs');
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto('https://proxy.yugogo.xyz/clash/proxies?speed=15,30&');
  const data = await page.$eval('body', (el) => el.innerText);
  fs.writeFileSync('r.yaml', data);
}

module.exports = {
  run,
};
