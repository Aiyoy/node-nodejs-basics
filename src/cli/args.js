export const parseArgs = () => {
  const args = process.argv;
  console.log(args);
  args.forEach((arg, index) => {
    if (!arg.indexOf('--')) {
      console.log(`${arg.substr(2)} is ${args[index + 1]}`);
    }
  });
};

parseArgs();
