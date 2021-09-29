function filter(arr, callback) {
  let returnArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      returnArr.push(arr[i]);
    }
  }
  
  return returnArr;
}


let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]