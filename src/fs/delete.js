// npm run fs:delete

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import fsProm from 'fs/promises';
import path from 'path';

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.access(path.join(__dirname, 'files', 'fileToRemove.txt'), async (error) => {
    try {
      if (error) throw error;
      await fsProm.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'), err => {
        try {
          if (error) throw error;
        } catch (err) {
          console.log(new Error('FS operation failed'));
        }
      })
    } catch (err) {
      console.log(new Error('FS operation failed'));
    }
  });
};

remove();
