import { createMyServer, unknownObject } from "./cjsToEsm.mjs";

createMyServer.listen(() => {
  console.log(`Unknown object: `, unknownObject);
});
