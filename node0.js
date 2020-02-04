const fs = require('fs');

fs.readFile('main.wasm', async (err, buffer) => {
  const result = await WebAssembly.instantiate(new Uint8Array(buffer));
  const { instance: { exports: { factorial } } } = result;
  console.log(factorial(10));
});
