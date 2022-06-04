// node src/streams/transform.js

import { Transform } from 'stream';

export const transform = async () => {
  const { stdin, stdout } = process;

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${chunk.reverse()}\n`);
    },
  });

  stdin.pipe(reverse).pipe(stdout);
  
};

transform();
