const readlineSync = require("readline-sync");

const NumberOfStudents = parseFloat(readlineSync.question("\nStudents: "), 10);
const NumberOfTeachers = parseFloat(readlineSync.question("\nTeachers: "), 10);
const BusCapacity = parseFloat(readlineSync.question("\nBus capacity: "), 10);

const NumberOfStudentsPerBus = ((NumberOfStudents + /BusCapacity);

const Federal = 0.157;

const State = 0.0447;

const Social = 0.062;

const Medicare = 0.0145;

let f = (Medicare+Social+State+Federal);

let MinusPreTax = (AnnualSalary - (AnnualSalary*PreTax));
let PayCheck = (MinusPreTax - (MinusPreTax*f));


A = (PayCheck/24);

const C = A.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});



console.log("\nYour take-home pay each check will be $" + C +".");
