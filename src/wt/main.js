const { Worker } = require("worker_threads");
const path = require("path");
const os = require("os");

const workerPath = path.resolve(__dirname, "worker.js");

const performCalculations = async () => {
  const result = [];
  const workersAmount = os.cpus().length || 1;

  const runWorker = (id) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath, { workerData: id });

      worker.on("message", (data) => {
        const { status, data: res } = data;
        if (status === "resolved") {
          result.push({ status, data: res });
        } else if (status === "error") {
          result.push({ status, data: null });
        }
      });

      worker.on("exit", () => resolve());
      worker.on("error", (error) => {
        console.error(error);
        resolve();
      });
    });
  };

  const workerPromises = Array.from({ length: workersAmount }, (_, idx) =>
    runWorker(10 + idx)
  );

  await Promise.all(workerPromises);

  console.log(result);
  return result;
};

performCalculations();
