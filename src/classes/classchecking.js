console.log("\n=== Instanceof Checking ===");
console.log("user1 instanceof User:", user1 instanceof User);
console.log("rabbit instanceof Animal:", rabbit instanceof Animal);
console.log("rabbit instanceof Rabbit:", rabbit instanceof Rabbit);
console.log("arr instanceof Array:", arr instanceof Array);
console.log("arr instanceof PowerArray:", arr instanceof PowerArray);

// Custom instanceof-like function
function isInstanceOf(obj, constructor) {
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
        if (proto === constructor.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

console.log("Custom check - rabbit is Animal:", isInstanceOf(rabbit, Animal));

// 7. Mixins
let sayMixin = {
    say(phrase) {
        console.log(`${this.name}: ${phrase}`);
    }
};

let jumpMixin = {
    jump() {
        console.log(`${this.name} jumps!`);
    }
};

// Mixin function
function mixin(target, ...sources) {
    Object.assign(target.prototype, ...sources);
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

// Apply mixins to class
mixin(Person, sayMixin, jumpMixin);

console.log("\n=== Mixins ===");
let person = new Person("John");
person.say("Hello everyone!");
person.jump();

// Alternative mixin pattern
let canSwim = Base => class extends Base {
    swim() {
        console.log(`${this.name} is swimming`);
    }
};

let canFly = Base => class extends Base {
    fly() {
        console.log(`${this.name} is flying`);
    }
};

class Duck {
    constructor(name) {
        this.name = name;
    }
    
    quack() {
        console.log(`${this.name} says: Quack!`);
    }
}

// Apply multiple mixins
class SuperDuck extends canFly(canSwim(Duck)) {
    constructor(name) {
        super(name);
    }
}

console.log("\n=== Multiple Mixins ===");
let donald = new SuperDuck("Donald");
donald.quack();
donald.swim();
donald.fly();

// Complete example with everything
class Employee {
    #salary;
    
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
    }
    
    static company = "Tech Corp";
    
    getDetails() {
        return `${this.name} - ${this.position}`;
    }
    
    getSalary() {
        return this.#salary;
    }
    
    giveRaise(percent) {
        this.#salary *= (1 + percent/100);
    }
}

class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, "Manager", salary);
        this.teamSize = teamSize;
    }
    
    conductMeeting() {
        console.log(`${this.name} is conducting a meeting with ${this.teamSize} team members`);
    }
}

console.log("\n=== Complete Employee Example ===");
let manager = new Manager("Sarah", 80000, 10);
console.log(manager.getDetails());
console.log("Company:", Manager.company);
manager.conductMeeting();
console.log("Salary: $" + manager.getSalary());
manager.giveRaise(10);
console.log("New salary: $" + manager.getSalary());