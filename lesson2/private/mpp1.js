function makeList() {
  let _list = [];
  
  return {
    add(item) {
      if (_list.includes(item)) {
        console.log("Item already in list");
      } else {
        _list.push(item);
        console.log(`${item} added!`);
      }
    },
    
    remove(item) {
      if (_list.includes(item)) {
        _list.splice(_list.indexOf(item), 1);
        console.log(`${item} removed!`);
      } else {
        console.log(`${item} not in list`);
      }
    },
    
    list() {
      if (_list.length > 0) {
        _list.forEach(elem => console.log(elem));
      } else {
        console.log("List is empty.");
      }
    }
  };
}

let list = makeList();
list.add("peas");
//peas added!

list.list();
//peas

list.add("corn");
//corn added!

list.list();
//peas
//corn

list.remove("peas");
//peas removed!

list.list();
//corn