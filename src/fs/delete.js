import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import fsProm from 'fs/promises';
import path from 'path';

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.access(path.join(__dirname, 'files', 'fileToRemove.txt'), async (error) => {
    if (error) {
      console.error('FS operation failed');
      return;
    } else {
      await fsProm.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'), err => {
        if (err) throw console.error('FS operation failed');
    })
    }
  });
};

remove();
