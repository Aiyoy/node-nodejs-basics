import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import fsProm from 'fs/promises';
import path from 'path';

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.access(path.join(__dirname, 'files'), async (error) => {
    if (error) {
      console.error('FS operation failed');
      return;
    } else {
      fs.access(path.join(__dirname, 'files_copy'), async (error) => {
        if (!error) {
          console.error('FS operation failed');
          return;
        } else {
          await fsProm.mkdir(path.join(__dirname, 'files_copy'), (error) => {
            if (error) console.error('FS operation failed');
          });

          const files = await fsProm.readdir(path.join(__dirname, 'files'));
          files.forEach(async (file) => {
            await fsProm.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files_copy', file));
          })
        }
      });
    }
  });
};

copy();
