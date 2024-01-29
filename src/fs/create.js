const fs = require("fs");
const path = require("path");

const create = async () => {
  const filePath = path.resolve(__dirname, "fresh.txt");
  try {
    await fs.promises.access(filePath);
    // throw new Error("FS operation failed");
    console.log('FS operation failed');
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.promises.writeFile(filePath, "I am fresh and young");
      console.log("File created and written.");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

create();
