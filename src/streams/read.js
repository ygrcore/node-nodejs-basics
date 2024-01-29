const fs = require("fs");
const path = require("path");

const read = async () => {
  const filePath = path.resolve(__dirname, "files", "fileToRead.txt");

  const fileStream = fs.createReadStream(filePath);

  return new Promise((resolve, reject) => {
    fileStream.on("data", (chunk) => {
      process.stdout.write(chunk);
    });

    fileStream.on("end", () => {
      resolve();
    });

    fileStream.on("error", (error) => {
      reject(error);
    });
  });
};

read();
