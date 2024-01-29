const fs = require('fs').promises;
const path = require('path');

const remove = async () => {
    const fileName = 'fileToRemove.txt';
    const filePath = path.resolve(__dirname, 'files', fileName);

    try {
        await fs.access(filePath);
        fs.rm(filePath).then(console.log('File successfully removed'));
    } catch (error) {
        console.log('FS operation failed', error);
    }
};

remove();