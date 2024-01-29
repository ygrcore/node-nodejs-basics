const { Transform } = require('stream');

const transform = async () => {

  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk);
    }
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  return new Promise((resolve, reject) => {
    process.stdin.on('end', () => {
      resolve();
    });

    process.stdin.on('error', (error) => {
      reject(error);
    });
  });
};

transform();