(async () => {
  const responsePromise = fetch('../out/main.wasm');
  const result = await WebAssembly.instantiateStreaming(responsePromise);
  const { factorial } = result.instance.exports;
  document.getElementById('container').textContent = factorial(10);
})();
