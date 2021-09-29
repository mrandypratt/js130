function makeCounterLogger(from) {
  return (to) => {
    if (from < to) {
      for (let i = from; i < to; i++) {
        console.log(i);
      }
    } else if (from > to) {
      for (let i = from; i > to; i--) {
        console.log(i);
      }
    } else {
      console.log(to);
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(1);
countlog(5);