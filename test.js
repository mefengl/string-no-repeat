const { removeDuplicateParts } = require('./dist/index.js');

const text = 'Woo! Woo! Woo! Woo! Woo! Again! Woo! Woo! Woo! Woo!';
const result = removeDuplicateParts(text, 2);
console.log(result);  // Outputs: "Woo! Woo! Again! Woo! Woo!"
