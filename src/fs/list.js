const fs = require('fs').promises;
const path = require('path');

const list = async () => {
  const folderPath = path.resolve(__dirname, 'files');

  try {
    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);

    console.log('List of files:');
    files.forEach(file => {
      console.log(file);
    });
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed: Folder does not exist');
    } else {
      console.error('FS operation failed:', err.message);
    }
  }
};

list();