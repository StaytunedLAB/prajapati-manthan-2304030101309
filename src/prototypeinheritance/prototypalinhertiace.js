let animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal  // rabbit inherits from animal
};

console.log("=== Basic Prototype Inheritance ===");
console.log("Rabbit eats?", rabbit.eats); // true (from animal)
console.log("Rabbit jumps?", rabbit.jumps); // true (own property)
rabbit.walk(); 

// Prototype chain
let longEar = {
    earLength: 10,
    __proto__: rabbit
};

console.log("\nLong ear properties:");
console.log("Ear length:", longEar.earLength); // 10
console.log("Jumps?", longEar.jumps); // true (from rabbit)
console.log("Eats?", longEar.eats); // true (from animal via rabbit)
longEar.walk(); // "Animal walks"