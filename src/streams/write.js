const fs = require('fs');
const path = require('path');

const write = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

    const fileStream = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
      process.stdin.on('data', (chunk) => {
        fileStream.write(chunk);
      });

      process.stdin.on('end', () => {
        fileStream.end();
        resolve();
      });

      process.stdin.on('error', (error) => {
        reject(error);
      });
    });
};

write();