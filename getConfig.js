const fs = require('fs');
const y = require('js-yaml');

async function getConfig() {
  const { rules } = y.load(fs.readFileSync('./rules.yaml'));
  const { proxies } = y.load(fs.readFileSync('./r.yaml'));
  const i = Math.ceil((Math.random() * proxies.length) / 50);
  const proxy = proxies.slice(i * 50, 50 * (i + 1));
  const proxyGroups = ['DIRECT', ...proxy.map(({ name }) => name)];
  return y.dump({
    port: 7890,
    'socks-port': 7891,
    'allow-lan': true,
    mode: 'Rule',
    'log-level': 'info',
    'external-controller': ':9090',
    proxies: proxy,
    'proxy-groups': [
      {
        name: '🚀 节点选择',
        type: 'select',
        proxies: proxyGroups,
      },
      {
        name: '♻️ 自动选择',
        type: 'url-test',
        url: 'http://www.gstatic.com/generate_204',
        interval: 300,
        tolerance: 50,
        proxies: proxyGroups,
      },
      {
        name: '🎯 全球直连',
        type: 'select',
        proxies: proxyGroups,
      },
      {
        name: '🛑 全球拦截',
        type: 'select',
        proxies: proxyGroups,
      },
      {
        name: '🐟 漏网之鱼',
        type: 'select',
        proxies: proxyGroups,
      },
    ],
    rules,
  });
}

module.exports = {
  getConfig,
};
