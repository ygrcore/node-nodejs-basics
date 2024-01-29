const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args.reduce((acc, arg, index, array) => {
    if (arg.startsWith("--")) {
      const propName = arg.slice(2);
      const value = array[index + 1] || null;
      acc.push(`${propName} is ${value}`);
    }
    return acc;
  }, []);

  console.log(result.join(", "));
};

parseArgs();
