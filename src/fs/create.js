import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.access(path.join(__dirname, 'files', 'fresh.txt'), (err) => {
    if (!err) {
      console.error('FS operation failed')
      return
    }
  
    fs.writeFile(
      path.join(__dirname, 'files', 'fresh.txt'),
      'I am fresh and young',
      (err) => {
        if (err) throw console.log('FS operation failed');
        console.log('Create')
      }
    );
  })
};

create();
