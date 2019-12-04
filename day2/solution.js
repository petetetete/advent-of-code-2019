const fs = require("fs");

// Get the stuff and make it less ugly.
const contents = fs.readFileSync("input.txt").toString();
const input = contents.split(",").map(a => parseInt(a));

let evaluateIntcodeComputer = (inputMemory, input1, input2) => {
  // Initialize memory.
  let memory = inputMemory.slice(0);
  memory[1] = input1;
  memory[2] = input2;

  let i = 0;
  while (i < memory.length && memory[i] != 99) {
    // Extract the info for this opcode
    let opcode = memory[i];
    let a = memory[memory[i + 1]];
    let b = memory[memory[i + 2]];
    let pos = memory[i + 3];

    // Do the thing specified by opcode.
    switch (opcode) {
      case 1:
        memory[pos] = a + b;
        break;
      case 2:
        memory[pos] = a * b;
        break;
      default:
        throw new Error(`Invalid opcode ${memory[i]}`);
    }
    i += 4;
  }
  return memory[0];
}

let shotgunIntcodeEvaluation = (inputMemory, maxInput, target) => {
  for (let a = 0; a < maxInput; a++) {
    for (let b = 0; b < maxInput; b++) {
      if (evaluateIntcodeComputer(inputMemory, a, b) == target) {
        return a * 100 + b;
      }
    }
  }
}

// PART 1
console.log(`Part 1 Answer: ${evaluateIntcodeComputer(input, 12, 2)}`);

// PART 2
console.log(`Part 2 Answer: ${shotgunIntcodeEvaluation(input, 100, 19690720)}`);
