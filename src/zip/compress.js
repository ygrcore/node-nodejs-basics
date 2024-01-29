const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const compress = async () => {
  const sourceFilePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const compressedFilePath = path.resolve(__dirname, 'files', 'archive.gz');

  const sourceStream = fs.createReadStream(sourceFilePath);

  const compressedStream = fs.createWriteStream(compressedFilePath);

  const gzipStream = zlib.createGzip();

  sourceStream.pipe(gzipStream).pipe(compressedStream);

  return new Promise((resolve, reject) => {
    compressedStream.on('finish', () => {
      console.log('File compressed successfully finished');
      resolve();
    });

    compressedStream.on('error', (error) => {
      reject(error);
    });
  });
};

compress();
