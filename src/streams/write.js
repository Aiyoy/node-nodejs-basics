// npm run streams:write

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const write = async () => {
  const { stdin } = process;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const { stdout } = process;

  let writeableStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));

  stdin.on('data', data => writeableStream.write(data));
};

write();
