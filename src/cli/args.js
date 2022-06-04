// node src/cli/args.js --propName value --prop2Name value2

export const parseArgs = () => {
  const args = process.argv;
  args.forEach((arg, index) => {
    if (!arg.indexOf('--')) {
      console.log(`${arg.substr(2)} is ${args[index + 1]}`);
    }
  });
};

parseArgs();
