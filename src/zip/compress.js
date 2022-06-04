// node src/zip/compress.js

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import fs from 'fs';

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const gzip = zlib.createGzip();
  const source = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
  const destination = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

compress();
