function map(arr, callback) {
  return arr.reduce((accum, current) => {
    accum.push(callback(current));
    return accum;
  }, [])
}

let arr = [1, 2, 3, 4]

console.log(map(arr, num => num * 2));