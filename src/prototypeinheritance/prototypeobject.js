console.log("\n=== Modern Prototype Methods ===");

// Object.create - create object with specific prototype
let animalProto = {
    eats: true,
    walk() {
        console.log(this.name + " walks");
    }
};

let rabbit2 = Object.create(animalProto);
rabbit2.name = "Bugs Bunny";
rabbit2.jumps = true;

console.log("Object.create example:");
console.log("Rabbit eats?", rabbit2.eats);
console.log("Rabbit jumps?", rabbit2.jumps);
rabbit2.walk();

// Object.getPrototypeOf
console.log("Rabbit prototype:", Object.getPrototypeOf(rabbit2) === animalProto);

// Object.setPrototypeOf
let mouse = { name: "Mickey" };
Object.setPrototypeOf(mouse, animalProto);
console.log("\nMouse after setPrototypeOf:");
console.log("Mouse eats?", mouse.eats);
mouse.walk();

// Creating object without __proto__
let pureObject = Object.create(null);
pureObject.name = "Pure Object";
console.log("\nPure object (no prototype):");
console.log("Name:", pureObject.name);
console.log("toString exists?", pureObject.toString === undefined); // true
console.log("No prototype:", Object.getPrototypeOf(pureObject) === null);

// Complete inheritance example
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
};

function Student(name, age, grade) {
    Person.call(this, name, age); // Call parent constructor
    this.grade = grade;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    console.log(`${this.name} is studying in grade ${this.grade}`);
};

console.log("\n=== Complete Inheritance Example ===");
let student = new Student("Alice", 20, "A");
student.introduce();
student.study();
console.log("Is student a Person?", student instanceof Person);
console.log("Is student a Student?", student instanceof Student);

// Multiple inheritance simulation
let canSwim = {
    swim() {
        console.log(this.name + " is swimming");
    }
};

let canFly = {
    fly() {
        console.log(this.name + " is flying");
    }
};

let superAnimal = Object.assign(
    Object.create(animalProto),
    canSwim,
    canFly
);
superAnimal.name = "Super Duck";

console.log("\n=== Mixin Example ===");
superAnimal.walk();
superAnimal.swim();
superAnimal.fly();