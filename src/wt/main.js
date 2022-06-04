// node src/wt/main.js

import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const performCalculations = async () => {
  const numCPUs = os.cpus().length;

  const workerPromises = [];

  for (let i = 0; i < numCPUs; i++) {
    workerPromises[i] = new Promise((resolve, reject) => {
      const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: 10 + i });
      worker.on('message', msg => {
        resolve(msg);
      });
      worker.on('error', msg => {
        reject(msg);
      });
    }) 
  }

  const resArr = await Promise.all(workerPromises);
  console.log(resArr);
};

performCalculations();
