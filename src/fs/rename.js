const fs = require("fs").promises;
const path = require("path");

const rename = async () => {
  const oldFileName = "wrongFilename.txt";
  const newFileName = "properFilename.md";

  const oldFilePath = path.resolve(__dirname, "files", oldFileName);
  const newFilePath = path.resolve(__dirname, "files", newFileName);

  try {
    await fs.access(oldFilePath);

    try {
      await fs.rename(oldFilePath, newFilePath);
      console.log("Rename operation completed successfully");
    } catch (renameError) {
      throw new Error("FS operation failed: Could not rename the file");
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed: Source file does not exist");
    } else {
      console.error("FS operation failed:", err.message);
    }
  }
};

rename();
