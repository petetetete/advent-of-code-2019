const fs = require("fs");

// Get the stuff and make it less ugly.
let contents = fs.readFileSync("input.txt").toString();
let input = contents.split("\r\n").filter(Boolean).map(a => parseInt(a));

// Functions to do the things.
let fuelCalculation = (mass) => Math.floor(mass/3) - 2;
let sum = (a, b) => a + b;

// PART 1
console.log(`Part 1 Answer ${input.map(fuelCalculation).reduce(sum)}`);

// PART 2
console.log(
  "Part 2 Answer:",
  input.map(mass => {
    let total = 0;
    while ((mass = fuelCalculation(mass)) > 0) {
      total += mass;
    }
    return total;
  }).reduce(sum));
