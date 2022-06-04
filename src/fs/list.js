// node src/fs/list.js

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import fsProm from 'fs/promises';
import path from 'path';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.access(path.join(__dirname, 'files'), async (error) => {
    try {
      if (error) throw error;
      const files = await fsProm.readdir(path.join(__dirname, 'files'));
      files.forEach(async (file) => {
        console.log(file);
      })
    } catch (err) {
      console.log('FS operation failed');
    }
  });
};

list();
