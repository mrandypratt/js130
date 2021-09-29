"use strict";

function bind(thisArg, func) {
  return () => {
    return func.call(thisArg);
  }
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }