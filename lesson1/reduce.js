function reduce(arr, callback, initialValue) {
  let previousValue;
  let currentValue;
  let index;
  
  if (initialValue !== undefined) {
    previousValue = initialValue;
    index = 0;
  } else {
    previousValue = arr[0]
    index = 1;
  }
  
  while (index < arr.length) {
    currentValue = arr[index];
    previousValue = callback(previousValue, currentValue)
    index++;
  }
    
  return previousValue;

}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]