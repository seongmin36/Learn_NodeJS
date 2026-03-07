import fs from "node:fs";

console.log("start");

fs.readFile(import.meta.url, () => {
  console.log("I/O callback");

  setTimeout(() => {
    console.log("setTimeout inside I/O");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate inside I/O");
  });
});

console.log("end");
