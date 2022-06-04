// для удобства проверки этого задания можно запустить node src/modules/index.js
// если вдруг версия вашего node ниже 16.15 и начнут выпадать ошибки, связанные с json,
// можно запустить используюя флаг node --experimental-json-modules src/modules/index.js

import { fileURLToPath } from 'url';
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import('./files/c.js');

import a from './files/a.json' assert {type: 'json'};
import b from './files/b.json' assert {type: 'json'};

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export {
  unknownObject,
  createMyServer,
};
