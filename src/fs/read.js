import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import fsProm from 'fs/promises';
import path from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), (error, data) => {
    if (error) return console.error('FS operation failed');
    const text = data.toString();
    console.log(text);
  });
};

read();
