// npm run fs:create

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import fsProm from 'fs/promises';
import path from 'path';

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.access(path.join(__dirname, 'files', 'fresh.txt'), (error) => {
    try {
      if (!error) throw error;

      fsProm.writeFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        'I am fresh and young',
        (err) => {
          try {
            if (err) throw err;
          } catch (error) {
            console.log('FS operation failed');
          }
        }
      );
    } catch (err) {
      console.log('FS operation failed');
    }
  })
};

create();
