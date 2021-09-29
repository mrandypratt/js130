function makeList() {
  let list = [];
  return function(item) {
    if (item) {
      if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
        console.log(`${item} removed!`);
      } else {
        list.push(item);
        console.log(`${item} added!`);
      }
    } else {
      if (list.length > 0) {
        list.forEach(elem => console.log(elem));
      } else {
        console.log("The list is empty.");
      }
    }
  };
}

let list = makeList(); // list(); // The list is empty.

list();

list("make breakfast"); // make breakfast added!

list("read book"); // read book added!

list(); // make breakfast
//read book

list("make breakfast"); // make breakfast removed!

list(); // read book