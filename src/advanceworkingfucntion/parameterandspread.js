function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sumAll(1, 2, 3, 4, 5));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log("Merged array:", merged);

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let combined = {...obj1, ...obj2};
console.log("Combined object:", combined);