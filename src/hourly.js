const readlineSync = require("readline-sync");

const HourlyWage = parseFloat(readlineSync.question("\nHourly wage: "), 10);

let Monday = parseFloat(readlineSync.question("\nMonday: "), 10);
let Tuesday = parseFloat(readlineSync.question("Tuesday: "), 10);
let Wednesday = parseFloat(readlineSync.question("Wednesday: "), 10);
let Thursday = parseFloat(readlineSync.question("Thursday: "), 10);
let Friday = parseFloat(readlineSync.question("Friday: "), 10);
let Saturday = parseFloat(readlineSync.question("Saturday: "), 10);
let Sunday = parseFloat(readlineSync.question("Sunday: "), 10);

let a = (Monday+Tuesday+Wednesday+Thursday+Friday+Saturday+Sunday)*HourlyWage;

let b = a.toLocaleString({minimumFractionDigit: 2, maximumFractionDigit: 2})

function financial(b) {
  return Number.parseFloat(b).toFixed(2);
}

console.log("\nYou'll make $" + financial(b) + " this week.\n");
