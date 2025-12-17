let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 2);
let sum = numbers.reduce((total, n) => total + n, 0);
let found = numbers.find(n => n > 3);

console.log("Doubled:", doubled);
console.log("Filtered:", filtered);
console.log("Sum:", sum);
console.log("Found:", found);
