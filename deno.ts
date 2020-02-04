const buffer = await Deno.readFile('main.wasm');
const module = new WebAssembly.Module(buffer);
const instance = new WebAssembly.Instance(module);
const { factorial } = instance.exports;
console.log(factorial(10));
