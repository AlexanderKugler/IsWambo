# Wambo Checker 🕵️‍♀️🧽

A lightweight NPM package that checks if a string is 'Wambo' or if it isn't. Inspired by the legendary scene from SpongeBob SquarePants, this tool is perfect for all fans of Patrick, Mermaid Man, and the science of Wambology! 🐚🦸‍♂️

## Installation 📦

Install the package via NPM:

[![Socket Badge](https://socket.dev/api/badge/npm/package/is-wambo/2.0.0)](https://socket.dev/npm/package/is-wambo/overview/2.0.0)

```bash
npm i is-wambo
```

## Usage 🚀

Import the package and use the `isWambo` function:

```javascript

console.log(isWambo('Wambo')); // true
console.log(isWambo('wambo')); // true
console.log(isWambo('wumbo')); // false
console.log(isWambo('Patrick')); // false

console.log(isNotWambo('Wambo')); // false
console.log(isNotWambo('wambo')); // false
console.log(isNotWambo('wumbo')); // true
console.log(isNotWambo('Patrick')); // true
```

## Why Wambo? 🤔

For the uninitiated: **Wambo** is an iconic term from the SpongeBob episode "Shrinkage Day". Patrick explains to SpongeBob the versatile application of Wambo:

> "I wambo, you wambo, he/she/it wambos; wambo, to wambo, wamboing, have wamboed... Wamborama, Wambology, the study of Wambo. It's first-grade, SpongeBob!"

## Features ✨

- **Simple:** Just one function! Check if your input is `Wambo`.
- **Lightweight:** Minimal code, maximum fun.
- **Nostalgic:** For everyone who grew up with SpongeBob and Patrick.

## API 🛠️

### `isWambo(input: string): boolean`

- **input**: The string to be checked.
- **Return value**: Returns `true` if the string is `Wambo` (case-insensitive), otherwise `false`.

### `isNotWambo(input: string): boolean`

- **input**: The string to be checked.
- **Return value**: Returns `false` if the string is `Wambo` (case-insensitive), otherwise `true`.

## License 📄

This package is released under the Apache License
Version 2.0.

---

>Wambology: It's not just science, it's a way of life. 🌈🚀
