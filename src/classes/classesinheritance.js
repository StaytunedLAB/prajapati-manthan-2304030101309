class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs at ${speed} km/h`);
    }
    
    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped`);
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name); // Call parent constructor
        this.earLength = earLength;
    }
    
    hide() {
        console.log(`${this.name} hides!`);
    }
    
    // Override parent method
    stop() {
        super.stop(); // Call parent method
        this.hide();
    }
}

console.log("\n=== Class Inheritance ===");
let rabbit = new Rabbit("Bunny", 10);
rabbit.run(20);
rabbit.stop();
console.log("Ear length:", rabbit.earLength); 