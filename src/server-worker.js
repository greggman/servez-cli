
const dataDir = require('../src/appdata')('servez-cli');
const c = require('ansi-colors');
const Servez = require('servez-lib');
const {workerData, parentPort} = require('worker_threads');

const {
  root,
  args,
  useColors,
} = workerData;

function sendCmd(cmd, data) {
  parentPort.postMessage({
    cmd,
    data,
  });
}

c.enabled = useColors;
const logger = {
  log: (...args) => sendCmd('log', [...args]),
  error: (...args) => sendCmd('error', [...args]),
  c,
};

const server = new Servez(Object.assign({
  root,
  dataDir,
  logger,
}, args));
server.on('start', () => {
  logger.log('press CTRL-C to stop the server.');
});


