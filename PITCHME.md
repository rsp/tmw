
# TypeScript Meets WebAssembly

Using AssemblyScript on the Frontend and<br>Backend with Node.js and Deno in 2020

RAFAŁ POCZTARSKI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @POCZTARSKI
---

# Rafał Pocztarski

You may know me from Stack Overflow

[<img alt="rsp on Stack Overflow" src="https://stackexchange.com/users/flair/303952.png" height="116">](https://stackoverflow.com/users/613198/rsp)

# pocztarski.com

<small>(and also from Medium, Quora, etc.)</small>

---

"If WASM + WASI existed in 2008, we wouldn't have needed to created Docker. That's how important it is.<br>Webassembly on the server is the future of computing.<br>A standardized system interface was the missing link.<br>Let's hope WASI is up to the task!"

Solomon Hykes, founder and CTO of Docker<br>March, 2019 [on Twitter](https://twitter.com/solomonstre/status/1111004913222324225)

---

# AssemblyScript

```ts
export function factorial(n: u32): u32 {
  return n < 1 ? 1 : n * factorial(n - 1);
}
```

---

# WASM

```txt
00000000: 0061 736d 0100 0000 0106 0160 017f 017f  .asm.......`....
00000010: 0302 0100 0503 0100 0007 1602 066d 656d  .............mem
00000020: 6f72 7902 0009 6661 6374 6f72 6961 6c00  ory...factorial.
00000030: 000a 1901 1700 2000 4101 4904 7f41 0105  ...... .A.I..A..
00000040: 2000 4101 6b10 0020 006c 0b0b 0021 1073   .A.k.. .l...!.s
00000050: 6f75 7263 654d 6170 7069 6e67 5552 4c0f  ourceMappingURL.
00000060: 2e2f 6d61 696e 2e77 6173 6d2e 6d61 70    ./main.wasm.map
```

111 bytes

---

# WAT

<pre>
(module (type $t0 (func (param i32) (result i32)))
  (func $factorial (export "factorial")
    (type $t0) (param $p0 i32) (result i32)
    get_local $p0
    i32.const 1
    i32.lt_u
    if $I0 (result i32)
      i32.const 1
    else
      get_local $p0
      i32.const 1
      i32.sub
      call $factorial
      get_local $p0
      i32.mul
    end) (memory $memory (export "memory") 0))
</pre>

---

# Now

All browsers, Node, Deno

# Soon

WASI runtimes, Ethereum blockchain

---

# Using WASM

---

# Browser

```js
(async () => {
  const res = fetch('main.wasm');
  const result = await WebAssembly.instantiateStreaming(res);
  const { factorial } = result.instance.exports;
  const x = factorial(10);
  document.getElementById('container').textContent = x;
})();
```

---

# Node

```js
const fs = require('fs');

fs.readFile('main.wasm', async (err, buffer) => {
  const typedArray = new Uint8Array(buffer);
  const module = new WebAssembly.Module(typedArray);
  const instance = new WebAssembly.Instance(module);
  const { factorial } = instance.exports;
  console.log(factorial(10));
});
```

```sh
$ node node.js
3628800
```

---

# Deno

```ts
const buffer = await Deno.readFile('main.wasm');
const module = new WebAssembly.Module(buffer);
const instance = new WebAssembly.Instance(module);
const { factorial } = instance.exports;
console.log(factorial(10));
```

```sh
$ deno run --allow-read=main.wasm deno.ts
3628800
```

---

# AssemblyScript<br>vs TypeScript

- no any, no undefined, no union types
- no `let x = {}`
- use `x = new Map<string, string>()`
- `===` is for identity comparisons (same object)
- exported functions cannot use all types yet

---

# AssemblyScript<br>supports

Types:

i32, u32, i64, u64, f32, f64, v128 plus some aliases

Standard library:

Array, ArrayBuffer, DataView, Date, Error, Map, Math, Number, Set, String, TypedArray

---

# Null and Undefined

Basic types cannot be nullable, but class and function types can
(but not by default).

Appending `| null` declares a nullable type.

There is no `undefined` in AssemblyScript.

---

# WASM

[webassembly.org](https://webassembly.org/)

---

# AssemblyScript

[assemblyscript.org](https://assemblyscript.org/)

---

# asm.js

[asmjs.org](http://asmjs.org/)

---

# WebAssembly<br>Studio

[webassembly.studio](https://webassembly.studio/)

---

# WASI

WebAssembly System Interface

[wasi.dev](https://wasi.dev/)

---

# WAMR

WebAssembly Micro Runtime

[github.com/bytecodealliance/wasm-micro-runtime](https://github.com/bytecodealliance/wasm-micro-runtime)

Small runtime binary size (85K for interpreter and 50K for AoT) and low memory usage

---

# eWASM

Ethereum WebAssembly

[ewasm.readthedocs.io](https://ewasm.readthedocs.io/)

[github.com/ewasm/design](https://github.com/ewasm/design)

<small>
"eWASM is a restricted subset of WASM to be used for contracts in Ethereum"
</small>

---

EVM 2.0

[EVM 2.0: Inside the Race to Replace the Heart of Ethereum](https://www.coindesk.com/open-heart-surgery-inside-ethereums-crucial-replacement-of-the-evm)<br>by Rachel Rose O'Leary, 2018

<small>
"the current EVM will be replaced by a new virtual machine called eWASM."
</small>

[Ethereum 2.0: A Complete Guide. Ewasm.](https://medium.com/chainsafe-systems/ethereum-2-0-a-complete-guide-ewasm-394cac756baf)<br> by Colin Schwarz, 2019

<small>
"Ewasm will replace the EVM as the state execution engine of the Ethereum network and is expected to be one of the final aspects of Eth 2.0 to be integrated."
</small>

---

WebAssembly 1.0 has shipped in<br>4 major browser engines.

Chrome, Edge, Firefox, and WebKit,<br>have reached consensus.

[webassembly.org/roadmap](https://webassembly.org/roadmap/)

---

# [Wasmtime](https://wasmtime.dev/)

A small and efficient runtime for WebAssembly & WASI

A Bytecode Alliance project

---

# Bytecode Alliance

"An open source community dedicated to creating secure new software foundations, building on standards such as WebAssembly and WebAssembly System Interface (WASI)."

"We have a vision for a secure-by-default WebAssembly ecosystem for all platforms."

[bytecodealliance.org](https://bytecodealliance.org/)

---

# [Awesome WebAssembly Runtimes](https://github.com/appcypher/awesome-wasm-runtimes)

---

# W3C

- [w3.org/community/webassembly](https://www.w3.org/community/webassembly/)
- [webassembly.github.io/spec](https://webassembly.github.io/spec/)
- [github.com/WebAssembly](https://github.com/WebAssembly)
- [github.com/WebAssembly/proposals](https://github.com/WebAssembly/proposals)

---

Articles

<small>

[WebAssembly Interface Types: Interoperate with All the Things!](https://hacks.mozilla.org/2019/08/webassembly-interface-types/)<br>by Lin Clark, Mozilla Hacks, 2019

[Standardizing WASI: A system interface to run WebAssembly outside the web](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/)<br>by Lin Clark, Mozilla Hacks, 2019

[Announcing the Bytecode Alliance: Building a secure by default, composable future for WebAssembly](https://hacks.mozilla.org/2019/11/announcing-the-bytecode-alliance/)<br>by Lin Clark, Mozilla Hacks, 2019

[Understanding WebAssembly text format](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) on MDN

[Writing WebAssembly By Hand](https://blog.scottlogic.com/2018/04/26/webassembly-by-hand.html) by Colin Eberhardt

[WebAssembly Text Format](https://webassembly.org/docs/text-format/) in WebAssembly docs

</small>

---

Lectures

<small>

[From Electron, to Wasm, to Rust (Aaand Back to Electron)](https://www.youtube.com/watch?v=lLzFJenzBng) by Irina Shestak, RustConf 2019

[WebAssembly for Web Developers](https://www.youtube.com/watch?v=njt-Qzw0mVY) by Surma Surma and Deepti Gandluri, Google I/O 2019

[HTTP/3 - HTTP over QUIC is the next generation](https://www.youtube.com/watch?v=idViw4anA6E) by Daniel Stenberg, Full Stack Fest 2019

[Bringing WebAssembly outside the web with WASI](https://www.youtube.com/watch?v=fh9WXPu0hw8) by Lin Clark, Full Stack Fest 2019

[WebAssembly on the Server](https://www.youtube.com/watch?v=A9SydP1CcZU) by Zack Bloom, Cloudflare 2019

---

More lectures

<small>

[Build the future of the web with WebAssembly and more](https://www.youtube.com/watch?v=BnYq7JapeDA), Google I/O 2018

[Speed, Speed, Speed: JavaScript vs C++ vs WebAssembly](https://www.youtube.com/watch?v=uMuYaES4W3o) by Franziska Hinkelmann, CovalenceConf 2019

[WebAssembly beyond the Web](https://www.youtube.com/watch?v=YhNkspvw37w) by Lin Clark and Till Schneidereit, WebAssembly Munich Meetup 2019
(slabsze)

[An Introduction to WebAssembly](https://www.youtube.com/watch?v=vChLD1VytOE) by Guy Royse, Devoxx Belgium 2019
technical

[Wasm The Future](https://www.youtube.com/watch?v=G-ThBWLxwuA) by Alex Danilo, Melbourne GDG Devfest 2018
technical

</small>

---

WASM + non-JS Talks:

<small>

- [Rust, WebAssembly, and the future of Serverless](https://www.youtube.com/watch?v=CMB6AlE1QuI) by Steve Klabnik, Full Stack Fest 2019
- [SPA Revolution with WebAssembly and ASP.NET Blazor](https://www.youtube.com/watch?v=kTBW94GcRJY) by Rainer Stropek, TechDays Stockholm 2019
- [WASM: Bringing Go to the Browser (and Beyond!)](https://www.youtube.com/watch?v=oVzFNktAkvA) by Gabbi Fisher, GothamGo 2019
- [WASM matter?](https://www.youtube.com/watch?v=eJMT1aImS9Q) by Russell Keith-Magee, PyCon AU 2019)

</small>

---

`[1, 1, 1].map(parseInt)`

---

# Questions?

Slides: https://pocztarski.com/tmw

## Rafał Pocztarski

## [pocztarski.com](https://pocztarski.com)

<small> `[1, 1, 1].map(parseInt)` </small>
