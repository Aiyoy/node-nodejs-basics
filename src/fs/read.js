// npm run fs:read

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), (error, data) => {
    try {
        if (error) throw error;
        const text = data.toString();
        console.log(text);
    } catch (err) {
      console.log(new Error('FS operation failed'));
    }
  });
};

read();
