class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);

function forEach(arr, callback, context) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}


let arr = [1, 2, 3]
forEach.call(arr, arr, foo.showItem)
