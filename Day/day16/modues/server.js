// to import all utilities of another module
import * as utility from "./utility.js";

import { addition, divied } from "./utility.js";
import { subtraction as sub } from "./utility.js";
import multiply from "./utility.js";
// this is also a multiply function we are use here any name to import default function becouse in one module only one default function available.....
import randumname from "./utility.js"; 

const a = 5;
const b = 4;

const resulta = addition(a, b);
const results = sub(a,b);
const resultm = multiply(a,b);
const resultmr = randumname(a,b); 
const resultd = divied(a,b);

console.log(resulta);
console.log(results);
console.log(resultm);
console.log(resultmr); 
console.log(resultd);

// using utility call

const resultua = utility.addition(a, b);
const resultus = utility.subtraction(a,b);
const resultum = utility.default(a,b); // use to call default function
const resultud = utility.divied(a,b);

console.log("Uesing all utility calling");

console.log(resultua);
console.log(resultus);
console.log(resultum);
console.log(resultud);
