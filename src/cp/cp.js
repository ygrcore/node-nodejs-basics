const path = require('path');
const { spawn } = require('child_process');

const workerPath = path.resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [workerPath, ...args], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  process.stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  });

  childProcess.on('close', () => {
    process.exit();
  });
};

spawnChildProcess([0, 1, 2, 3, 9]);

