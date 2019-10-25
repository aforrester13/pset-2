const readlineSync = require("readline-sync");

const HwWeight = 0.15;
const QzWeight = 0.35;
const TstWeight = 0.50;

let Homework1 = parseFloat(readlineSync.question("\nEnter three homework grades.\n"), 10);
let Homework2 = parseFloat(readlineSync.question(""), 10);
let Homework3 = parseFloat(readlineSync.question(""), 10);

let Quiz1 = parseFloat(readlineSync.question("\nEnter three quiz grades.\n"), 10);
let Quiz2 = parseFloat(readlineSync.question(""), 10);
let Quiz3 = parseFloat(readlineSync.question(""), 10);

let Test1 = parseFloat(readlineSync.question("\nEnter three test grades.\n"), 10);
let Test2 = parseFloat(readlineSync.question(""), 10);
let Test3 = parseFloat(readlineSync.question(""), 10);

let c = ((Homework1 + Homework2 + Homework3) / 3) * (HwWeight);
let a = ((Quiz1 + Quiz2 + Quiz3) / 3) * (QzWeight);
let b = ((Test1 + Test2 + Test3) / 3) * (TstWeight);
let d = (a + b + c)
let g = Math.round(100*d) / (100)
let h = g.toLocaleString()
function financial(h) {
  return Number.parseFloat(h).toFixed(2);
}

console.log("\nYour marking period grade is " + h + "%.");
