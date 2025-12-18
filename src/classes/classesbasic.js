class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
    
    get birthYear() {
        return 2024 - this.age;
    }
    
    set birthYear(year) {
        this.age = 2024 - year;
    }
}

console.log("=== Basic Class ===");
let user1 = new User("Alice", 25);
user1.sayHello();
console.log("Birth year:", user1.birthYear);
user1.birthYear = 1995;
console.log("New age:", user1.age);
console.log("===================");