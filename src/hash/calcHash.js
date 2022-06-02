import crypto from 'crypto';

export const calculateHash = async () => {
  console.log(crypto.createHash('sha256').digest('hex'));
};

calculateHash();
