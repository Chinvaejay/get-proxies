const fs = require('fs');
const c = require('child_process');

async function getProxy() {
  return new Promise((res, rej) => {
    c.exec(
      'curl https://proxy.yugogo.xyz/clash/proxies?speed=15,30',
      (err, out) => {
        if (err) {
          rej(err);
        }
        fs.writeFileSync('r.yaml', out);
        res();
      }
    );
  });
}
async function run() {
  await getProxy();
}

module.exports = {
  run,
};
