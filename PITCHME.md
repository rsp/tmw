
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

# WASM

[webassembly.org](https://webassembly.org/)

---

# WASI

[wasi.dev](https://wasi.dev/)

---

# asm.js

[asmjs.org](http://asmjs.org/)

---

# WebAssembly<br>Studio

[webassembly.studio](https://webassembly.studio/)

---

# Can I use WASM

[caniuse.com/wasm](https://caniuse.com/wasm)

Global: 88.53%, Poland: 92.81%

Supported in:
Edge, Firefox, Chrome, Safari, Opera, iOS Safari, Android Browser,
Opera Mobile, Chrome for Android, Firefox for Android,
Samsung Internet

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

WAT - WebAssembly Text Format

WABT - WebAssembly Binary Toolkit

WASM - WebAssembly Binary Format

---

# WASM tools

[Emscripten](https://emscripten.org/) - LLVM compiler backend targetting JS, asm.js and WASM

[WABT](https://github.com/WebAssembly/wabt) - The WebAssembly Binary Toolkit

[Binaryen](https://github.com/WebAssembly/binaryen) - Compiler and toolchain infrastructure

emcc - Emscripten Compiler Frontend (similar to gcc)

---

# Emscripten

[emscripten.org](https://emscripten.org/)

- compiles C and C++ to JS/asm.js/WASM
- compiles any language translated into LLVM bitcode
- compile C/C++ runtimes of other languages (e.g. Python, Lua)

---

# AssemblyScript

[assemblyscript.org](https://assemblyscript.org/)

---

# BONUS

---

# GitHub Actions

- [github.com/features/actions](https://github.com/features/actions)
- [help.github.com/actions](https://help.github.com/actions)

Linux, macOS, Windows, ARM, containers

(GitHub-hosted and self-hosted)

---

# Not yet

Operator overloading in JS

[github.com/tc39/proposal-operator-overloading](https://github.com/tc39/proposal-operator-overloading)

Status: Stage 0; to be presented at the December 2019 TC39 meeting

---

# Maybe some day

Proper Tail Calls (PTC)

vs.

Syntactic Tail Calls (STC)

[github.com/tc39/proposal-ptc-syntax](https://github.com/tc39/proposal-ptc-syntax)

---

# MORE INFO

---

# WASM and WASI

Watch all presentations by:

- Lin Clark
- Steve Klabnik

---

# TC39

Ecma International

"We develop the JavaScript (formally, ECMAScript) specification on GitHub"

[tc39.es](https://tc39.es/)

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

# WASM + non-JS

Talks:

- [Rust, WebAssembly, and the future of Serverless](https://www.youtube.com/watch?v=CMB6AlE1QuI) by Steve Klabnik, Full Stack Fest 2019
- [SPA Revolution with WebAssembly and ASP.NET Blazor](https://www.youtube.com/watch?v=kTBW94GcRJY) by Rainer Stropek, TechDays Stockholm 2019
- [WASM: Bringing Go to the Browser (and Beyond!)](https://www.youtube.com/watch?v=oVzFNktAkvA) by Gabbi Fisher, GothamGo 2019
- [WASM matter?](https://www.youtube.com/watch?v=eJMT1aImS9Q) by Russell Keith-Magee, PyCon AU 2019)

---

`[1, 1, 1].map(parseInt)`

---

# Questions?

Slides: https://pocztarski.com/tmw

## Rafał Pocztarski

## [pocztarski.com](https://pocztarski.com)

<small> `[1, 1, 1].map(parseInt)` </small>
