function makeMultipleLister(number) {
  let upper = 100;
  return function() {
    let counter = number;
    while (counter < upper) {
      console.log(counter);
      counter += number;
    }
  }
}


let lister = makeMultipleLister(17);
lister();
lister();