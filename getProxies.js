const fs = require('fs');
const c = require('child_process');

async function run() {
  return new Promise((res, rej) => {
    c.exec(
      'curl https://proxy.yugogo.xyz/clash/proxies?c=US,HK&speed=15,30&type=ss,ssr',
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

module.exports = {
  run,
};
