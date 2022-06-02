export const parseEnv = () => {
  const variables = process.env;
  const keys = Object.keys(variables).filter((key) => {
    if (!key.indexOf('RSS_')) return key;
  });
  keys.forEach((key) => {
    console.log(`${key}=${variables[key]}`);
  });
};

parseEnv();
