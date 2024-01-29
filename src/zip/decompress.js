const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const decompress = async () => {
  const sourceFilePath = path.resolve(__dirname, 'files', 'archive.gz');
  const decompressedFilePath = path.resolve(__dirname, 'files', 'fileToCompressBack.txt');

  const compressedStream = fs.createReadStream(sourceFilePath);

  const decompressedStream = fs.createWriteStream(decompressedFilePath);

  const gunzipStream = zlib.createGunzip();

  compressedStream.pipe(gunzipStream).pipe(decompressedStream);

  return new Promise((resolve, reject) => {
    decompressedStream.on('finish', () => {
      console.log('File decompress successfully finished');
      resolve();
    });

    decompressedStream.on('error', (error) => {
      reject(error);
    });
  });
};

decompress();
