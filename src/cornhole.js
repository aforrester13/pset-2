const readlineSync = require("readline-sync");

const Length = 48;
const Width = 24;
const Diameter = 6;
const Pi = 3.14159265

let Radius = (Diameter/2);
let AreaOfCircle = Pi*(Radius*Radius);
let SurfaceArea = (Length*Width);
let TotalArea = (SurfaceArea - AreaOfCircle);


const A = TotalArea.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});


console.log("\nThe surface area of a standard Cornhole board is " + A + " square inch(es).\n");
