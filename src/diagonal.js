const readlineSync = require("readline-sync");
const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");

let w = Width;
let l = Length;
let c = Math.sqrt((w*w + l*l))
let h = Math.round(100*c)/(100);
let x = h.toLocaleString( 'en', {minimumFractionDigit: 2, maximumFractionDigit: 2})

function financial(x) {
  return Number.parseFloat(x).toFixed(2)
}

console.log("\nA(n) " + w + "-by-" + l +  "-inch sheet of paper has a diagonal length of " + financial(x) +   " inch(es).\n");
