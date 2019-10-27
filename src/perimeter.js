const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const Conversion = 2.54;

let w = Width;
let l = Length;
let c = w*Conversion;
let s = l*Conversion;
let f = (2*c)+(2*s);
let h = Math.round(100*f)/(100);
let x = h.toLocaleString()

console.log("\nA(n) " + w + "-by-" + l +  "-inch sheet of paper has a perimeter of " + x +   " centimeters(s).\n");
