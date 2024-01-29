const fs = require('fs').promises;
const path = require('path');

const read = async () => {
    const fileName = 'fileToRead.txt';
    const filePath = path.resolve(__dirname, 'files', fileName);

    try {
      const data = await fs.readFile(filePath, { encoding: 'utf-8' });
      console.log(data);
    } catch (err) {
      throw new Error('FS operation failed: ' + err.message);
    }
  };

read();