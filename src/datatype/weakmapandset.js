let weakMap = new WeakMap();
let keyObj = {};
weakMap.set(keyObj, "secret data");
console.log("WeakMap get:", weakMap.get(keyObj));

let weakSet = new WeakSet();
let obj1 = {};
weakSet.add(obj1);