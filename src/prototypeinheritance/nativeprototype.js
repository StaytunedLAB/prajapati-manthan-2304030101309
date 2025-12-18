console.log("\n=== Native Prototypes ===");

// Adding method to native prototype
if (!Array.prototype.findLast) {
    Array.prototype.findLast = function(callback) {
        for (let i = this.length - 1; i >= 0; i--) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
        return undefined;
    };
}

let numbers = [1, 2, 3, 4, 5];
console.log("Last even number:", numbers.findLast(n => n % 2 === 0));

// Object prototype chain
let obj = {};
console.log("obj.toString:", typeof obj.toString); // function (from Object.prototype)
console.log("obj.__proto__ === Object.prototype?", obj.__proto__ === Object.prototype);

// String prototype methods
String.prototype.repeat = function(count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += this;
    }
    return result;
};

console.log("Custom repeat:", "Hi ".repeat(3));