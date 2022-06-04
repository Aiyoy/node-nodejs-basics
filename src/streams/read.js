// npm run streams:read

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const read = async () => {
  const { stdout } = process;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), "utf8");

  readableStream.on('data', (data) => { 
    stdout.write(data);
  });
};

read();
