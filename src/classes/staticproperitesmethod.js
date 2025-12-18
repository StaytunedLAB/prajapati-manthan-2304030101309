class Calculator {
    static PI = 3.14159;
    
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

console.log("\n=== Static Members ===");
console.log("PI:", Calculator.PI);
console.log("Add:", Calculator.add(5, 3));
console.log("Multiply:", Calculator.multiply(4, 6));

// Static in inheritance
class MathUtils extends Calculator {
    static square(x) {
        return x * x;
    }
}

console.log("Square:", MathUtils.square(5));
console.log("Still has PI:", MathUtils.PI);