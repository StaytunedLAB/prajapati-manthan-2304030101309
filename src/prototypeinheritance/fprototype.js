function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound");
};

let dog = new Animal("Dog");
console.log("\n=== Constructor Prototype ===");
dog.speak(); // "Dog makes a sound"
console.log("Is dog an Animal?", dog instanceof Animal); // true

// F.prototype example
function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit  // Important to set constructor back
};

let whiteRabbit = new Rabbit("White Rabbit");
console.log("\nRabbit prototype:");
console.log("Name:", whiteRabbit.name);
console.log("Jumps?", whiteRabbit.jumps);
console.log("Constructor:", whiteRabbit.constructor === Rabbit);// "Animal walks"