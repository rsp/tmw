const mod = new WebAssembly.Module(await Deno.readFile('main.wasm'));
const { exports: { factorial } } = new WebAssembly.Instance(mod);
console.log(factorial(10));
