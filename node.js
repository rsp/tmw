const fs = require('fs');

fs.readFile('main.wasm', async (err, buffer) => {
  const typedArray = new Uint8Array(buffer);
  const module = new WebAssembly.Module(typedArray);
  const instance = new WebAssembly.Instance(module);
  const { factorial } = instance.exports;
  console.log(factorial(10));
});
