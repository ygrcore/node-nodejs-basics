const fs = require('fs');
const path = require('path');


const create = async () => {
    const filePath = path.join(__dirname, 'fresh.txt');
    fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) {
            console.error('FS operation failed', err);
        } else {
            console.log('File is written');
        }
    });
};

create();