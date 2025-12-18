class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
    
    // Override native method
    map(callback) {
        let result = super.map(callback);
        result.isPowerArray = true;
        return result;
    }
}

console.log("\n=== Extending Built-in Classes ===");
let arr = new PowerArray(1, 2, 3, 4, 5);
console.log("Array:", arr);
console.log("Is empty?", arr.isEmpty());
let squared = arr.map(x => x * x);
console.log("Squared:", squared);
console.log("Is PowerArray?", squared.isPowerArray);
console.log("Is Array?", squared instanceof Array);
console.log("Is PowerArray?", squared instanceof PowerArray);