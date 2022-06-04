// node src/fs/rename.js

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import fsProm from 'fs/promises';
import path from 'path';

export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.access(path.join(__dirname, 'files', 'wrongFilename.txt'), async (error) => {
    try {
      if (error) throw error;
      fs.access(path.join(__dirname, 'files', 'properFilename.md'), async (error) => {
        try {
          if (!error) throw error;
          await fsProm.rename(
            path.join(__dirname, 'files', 'wrongFilename.txt'),
            path.join(__dirname, 'files', 'properFilename.md'),
            err => {
                try {
                  if (error) throw error;
                } catch (err) {
                  console.log('FS operation failed');
                }
            }
          );
        } catch (err) {
          console.log('FS operation failed');
        }
      });
    } catch (err) {
      console.log('FS operation failed');
    }
  });
};

rename();
