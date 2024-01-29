const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const calculateHash = async () => {
  const filePath = path.resolve(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );

  const fileStream = fs.createReadStream(filePath);

  const sha256Hash = crypto.createHash("sha256");

  return new Promise((resolve, reject) => {
    fileStream.on("data", (chunk) => {
      sha256Hash.update(chunk);
    });

    fileStream.on("end", () => {
      const hashResult = sha256Hash.digest("hex");
      console.log("SHA256 Hash:", hashResult);
      resolve(hashResult);
    });

    fileStream.on("error", (error) => {
      reject(error);
    });
  });
};

calculateHash();
