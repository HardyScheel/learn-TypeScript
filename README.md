# Learn TypeScript

A library with examples and exercises in TypeScript. There is many documentation and implementation that you can explore to learn, and also to use for yourself.

The learning order and thematic is oriented by following tutorials:

* [Official TypeScript Handbook](https://www.typescriptlang.org/docs/handbook)
* [TypeScript tutorial at tektutorialshub.com](https://www.tektutorialshub.com/typescript-tutorial/)

## Things I use

* TypeScript 4
* [Visual Studio Code](https://code.visualstudio.com)
* Node.js 12 & npm

## Installing the TypeScript compiler

* npm global installation: `npm install -g typescript`

* update the compiler: `npm update -g typescript`

* Install the TypeScript compiler locally in your project to avoid possible interactions with other TypeScript projects: `npm install --save-dev typescript`

* Test the installation: `tsc --version`

* https://code.visualstudio.com/docs/languages/typescript#_installing-the-typescript-compiler

## Typescript configuration file

To enable "compile on save feature" and other compiler options first create a Typescript Configuration file tsconfig.json. Or use:

```shell
tsc --init
```
### Enable Compile on Save

Running the tsc in watch mode. Navigate to your project folder. This will watch the folder for changes made to our typescript file and immediate run the compiler:

```shell
tsc -w
```

OR

Using the Build Task in Visual Studio Code. Hit the `Ctrl + Shift + B` from within VS Code. Select `tsc: watch`. This will make the TypeScript compiler to watch for changes made to the TypeScript file and run the compiler on each change.

## Document your TypeScript code with JSDoc

You can use JSDoc. Keep in mind that when using JSDoc for TypeScript code, you should not include type annotations. The TypeScript compiler only uses TypeScript type annotations and ignores those from JSDoc.

## How to start as a beginner

* https://code.visualstudio.com/docs/typescript/typescript-tutorial
* [tektutorialshub.com](https://www.tektutorialshub.com/typescript-tutorial/)

## Tools

* [TypeScript Playground (web based editor)](https://www.typescriptlang.org/play)

## Data Types

The data type is an attribute of data which tells us what kind of value the data has.

![TypeScript-Types-1024x423.png](./assets/img/TypeScript-Types-1024x423.png)

TypeScript supports 7 primitive types:
* `number`
* `string`
* `boolean`
* `bigint`
* `symbol`
* `undefined`
* `null`

All other data types are objects in Typescript. A primitive data type is a data type that is not an object and has no methods. All primitives are immutable.

### any
The `any` type is the base type for all other types. `any` data type can hold any data.

### number

The `number` data type in TypeScript are 64-bit floating-point values and are used to represent integers and fractions.

```TypeScript
let decimal: number = 10; 
let hex: number = 0xa00d;       // hexadecimal number starts with 0x
let binary: number = 0b1010;    // binary number starts with 0b 
let octal: number = 0o633;      // octal number starts with 0o
```

### string

The string value is enclosed in double-quotes (“) or single quotes (‘).

### Multiline string

The strings can span multiple lines in such cases the strings are surrounded by the backtick/backquote (`) character.

```TypeScript
let sentence: string =`Hello, welcome to the world of typescript, 
    the typed super of javascript`
```

### bigint
`bigint`  will provide a way to represent whole numbers larger than 253. It's new with TypeScript v3.2. You can use the bigint only if you are targeting version ESNext (ES2020).

### null and undefined

**undefined** = Represents the intentional absence of object value. / A variable has no (object) value.

**null** = Denotes value given to all uninitialized variables. / A variable is not initialized.

### symbol

New to ES6. It represents the javaScript symbol primitive type. It represents unique tokens that may be used as keys for object properties. It is created by the global Symbol() function. Each time the Symbol() function is called, a new unique symbol is returned.

# License

All my publications in this project are free to use and are subject to the [MIT](/LICENSE) license.

MIT License

Copyright (c) 2020 Hardy Scheel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
