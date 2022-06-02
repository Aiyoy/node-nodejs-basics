import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import fsProm from 'fs/promises';
import path from 'path';

export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.access(path.join(__dirname, 'files', 'wrongFilename.txt'), async (error) => {
    if (error) {
      console.error('FS operation failed');
      return;
    } else {
      fs.access(path.join(__dirname, 'files', 'properFilename.md'), async (error) => {
        if (!error) {
          console.error('FS operation failed');
          return;
        } else {
          fs.rename(
            path.join(__dirname, 'files', 'wrongFilename.txt'),
            path.join(__dirname, 'files', 'properFilename.md'),
            err => {
                if (err) throw console.error('FS operation failed');;
                console.log('File rename');
            }
        );
        }
      });
    }
  });
};

rename();
