// require() : a built-in function to include external modules that exist in separate files 

// module.exports : a special object

// let info = require("./Fruits");
// console.log(info);

import { sum , PI, mul, g } from "./import.js";
import randomWord from 'random-word';
console.log(sum(1,3));
console.log(mul(2,5));
console.log(g);
console.log(PI);
console.log(randomWord());