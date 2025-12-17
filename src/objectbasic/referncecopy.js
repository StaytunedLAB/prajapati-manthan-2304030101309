let obj1 = { value: 10 };
let obj2 = obj1; // Reference copy
obj2.value = 20;
console.log("obj1 value:", obj1.value);

// Shallow copy
let obj3 = { a: 1, b: 2 };
let obj4 = Object.assign({}, obj3);
obj4.a = 100;
console.log("obj3.a:", obj3.a); // 1 (unchanged)
console.log("obj4.a:", obj4.a); // 100