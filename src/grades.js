

const readlineSync = require("readline-sync");

let Grade1 = Number(readlineSync.question("\nEnter three homework grades.\n"));
  let Grade2 = Number(readlineSync.question(""));
  let Grade3 = Number(readlineSync.question(""));
let Grade4 = Number(readlineSync.question("\nEnter three quiz grades.\n"));
  let Grade5 = Number(readlineSync.question(""));
  let Grade6 = Number(readlineSync.question(""));
let Grade7 = Number(readlineSync.question("\nEnter three test grades.\n"));
  let Grade8 = Number(readlineSync.question(""));
  let Grade9 = Number(readlineSync.question(""));

let Assignments = 3;
const HwWeight = 0.15;
const QzWeight = 0.35;
const TstWeight = 0.50;


let HwGrades = ((Grade1 + Grade2 + Grade3 / Assignments) * HwWeight);
let QzGrades = ((Grade4 + Grade5 + Grade6 / Assignments) * QzWeight);
let TstGrades = ((Grade7 + Grade8 + Grade9 / Assignments) * TstWeight);
let MpAverage = (HwGrades + QzGrades + TstGrades);

MpAverage = MpAverage.toLocaleString( 'en', {minimumFractionDigit: 2, maximumFractionDigit: 2});
MpAverage= Math.round(100*MpAverage)/(100);

function financial(MpAverage) {
  return Number.parseFloat(MpAverage).toFixed(2)
}

console.log("\nYour marking period grade is " + financial(MpAverage) + "%");
