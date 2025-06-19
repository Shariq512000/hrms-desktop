const os = require('os');
const { machineIdSync } = require('node-machine-id');

function getDeviceFingerprint() {
  const id = machineIdSync(); // hashed, stable per device
  const hostname = os.hostname();
  const platform = os.platform();
  const arch = os.arch();
  const release = os.release();

  const fingerprint = `${id}-${hostname}-${platform}-${arch}-${release}`;
  return fingerprint;
}

module.exports = getDeviceFingerprint;
