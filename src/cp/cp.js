import child_process from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const spawnChildProcess = async (args) => {
  const childProcess = child_process.fork(path.join(__dirname, 'files', 'script.js'), args);
};

spawnChildProcess(process.argv.slice(2));
