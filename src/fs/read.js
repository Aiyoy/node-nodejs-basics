import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.readFile(path.join(__dirname, 'file', 'fileToRead.txt'), (error, data) => {
    if (error) return console.error(new Error('FS operation failed'));
    const text = data.toString();
    console.log(text);
  });
};

read();
