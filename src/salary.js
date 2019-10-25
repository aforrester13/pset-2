const readlineSync = require("readline-sync");

const AnnualSalary = parseFloat(readlineSync.question("\nAnnual salary: "), 10);

const PreTax = 0.07;

const Federal = 0.157;

const State = 0.0447;

const Social = 0.062;

const Medicare = 0.0145;

let f = (Medicare+Social+State+Federal);

let MinusPreTax = (AnnualSalary - (AnnualSalary*PreTax));
let PayCheck = (MinusPreTax - (MinusPreTax*f));


A = (PayCheck/24);

const C = A.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});



console.log("\nYour take-home pay each check will be $" + C +".\n");
