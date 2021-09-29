function xyzzy({ prop1, prop2, prop3 }) {
  console.log(prop1); // 3
  console.log(prop2); // 2
  console.log(prop3); // 1
}

let obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

xyzzy(obj);