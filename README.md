# string-no-repeat

## Description
A simple package to remove duplicate parts from a text string based on the provided count.

## Installation

```sh
npm install string-no-repeat
```

## Usage

The main function exported by this package is `removeDuplicates(text, count)`.

Here is a basic example:

```javascript
import { removeDuplicates } from 'string-no-repeat';

const str = "Woo! Woo! Woo! Woo! Woo!";
const result = removeDuplicates(str, 2);

console.log(result);
// Outputs: "Woo! Woo!"
```

In this example, the function will reduce the amount of "Woo!" in the string to only two times.

## Tests

To run the test suite for `string-no-repeat`, run:

```sh
npm test
```
