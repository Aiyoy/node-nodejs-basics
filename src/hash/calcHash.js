// npm run zip:decompress

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fd = fs.createReadStream(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
  const hash = crypto.createHash('sha256');
  hash.setEncoding('hex');

  fd.on('end', function() {
    hash.end();
    console.log(hash.read());
  });

  fd.pipe(hash);
};

calculateHash();
