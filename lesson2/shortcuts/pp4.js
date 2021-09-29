function foo(one, two) {
  return [
    two,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array[0], array[2]);
let bar = result[0];
let qux = result[1];
let baz = result[2];


console.log(bar)
console.log(qux)
console.log(baz)
