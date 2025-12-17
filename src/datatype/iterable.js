let word = "Hello";
for (let char of word) {
    console.log("Char:", char);
}

let nums = [10, 20, 30];
let iterator = nums[Symbol.iterator]();
console.log("Iterator:", iterator.next().value);