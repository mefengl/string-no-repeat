# string-no-repeat

## Description
A package that removes excess duplicate parts from a text string based on the count provided.

## Installation

```sh
npm install string-no-repeat
```

## Usage

The main function exported by this package is `removeDuplicateParts(text, duplicatesToKeep)`.

Here's a basic example:

```javascript
const { removeDuplicateParts } = require('string-no-repeat');

const str = "Woo! Woo! Woo! Woo! Woo!";
const result = removeDuplicateParts(str, 2);

console.log(result);
// Outputs: "Woo! Woo!"
```

In this example, the function reduces the count of "Woo!" in the string to only two instances.

## Tests

To run the test suite for `string-no-repeat`, use the command:

```sh
npm test
```

A test file is provided (`test.js`). Here is an example test:

```javascript
const { removeDuplicateParts } = require('./dist/index.js');

const text = 'Woo! Woo! Woo! Woo! Woo! Again! Woo! Woo! Woo! Woo!';
const result = removeDuplicateParts(text, 2);
console.log(result);  // Outputs: "Woo! Woo! Again! Woo! Woo!"
```
