console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve().then(() => {
  console.log("promise then");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("end");
