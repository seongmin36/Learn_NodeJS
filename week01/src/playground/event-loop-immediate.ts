console.log("start");

setTimeout(() => {
  console.log("setTimeout 0");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

console.log("end");
