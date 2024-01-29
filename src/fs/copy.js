const fs = require("fs").promises;
const path = require("path");

const copy = async () => {
  const srcDir = path.resolve(__dirname, "files");
  const destDir = path.resolve(__dirname, "files_copy");

  try {
    await fs.access(srcDir);

    try {
      await fs.mkdir(destDir);
    } catch (mkdirError) {
      if (mkdirError.code === "EEXIST") {
        throw new Error("FS operation failed");
      } else {
        throw mkdirError;
      }
    }

    const files = await fs.readdir(srcDir);

    await Promise.all(
      files.map(async (file) => {
        const sourceFile = path.join(srcDir, file);
        const destinationFile = path.join(destDir, file);

        await fs.copyFile(sourceFile, destinationFile);
      })
    );

    console.log("All files from 'files' folder successfully copied into 'files_copy' folder");
  } catch (err) {
    console.error(err.message);
  }
};

copy();
