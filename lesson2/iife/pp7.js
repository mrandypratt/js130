(function count(num) {
  console.log(num);
  if (num > 0) {
    count(num -1);
  }
})(7)