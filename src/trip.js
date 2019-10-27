const readlineSync = require("readline-sync");

const NumberOfStudents = parseFloat(readlineSync.question("\nStudents: "), 10);
const NumberOfTeachers = parseFloat(readlineSync.question("Teachers: "), 10);
const BusCapacity = parseFloat(readlineSync.question("Bus capacity: "), 10);

const StudentsAndTeachers = (NumberOfStudents + NumberOfTeachers);
const NumberOfBuses = (StudentsAndTeachers/BusCapacity);

let LeftoverPeople = (StudentsAndTeachers % BusCapacity);

const A = NumberOfBuses.toLocaleString("en", {minimumFractionDigits:0, maximumFractionDigits:0});
const B = LeftoverPeople.toLocaleString("en", {minimumFractionDigits:0, maximumFractionDigits:0});


console.log("\n" + A + " bus(es) is (are) needed, with " + B + " passenger(s) on the last bus.\n");
