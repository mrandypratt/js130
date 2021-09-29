//With an object

"use strict";

function localTotal() {
  return {
    runningTotal: 0,
    
    add(num) {
      this.runningTotal += num;
      return this.runningTotal;
    },
    
    subtract(num) {
      this.runningTotal -= num;
      return this.runningTotal;
    }
  };
}

let functions = localTotal()
let add = functions.add.bind(functions)
let subtract = functions.subtract.bind(functions)

console.log(add(1));       // 1
console.log(add(42));      // 43
console.log(subtract(39)); // 4
console.log(add(6));       // 10

