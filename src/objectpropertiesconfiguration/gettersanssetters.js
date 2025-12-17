let account = {
    firstName: "John",
    lastName: "Doe",
    
    // Getter for full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Setter for full name
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log("\n=== Getters and Setters ===");
console.log("Full name (getter):", account.fullName);

// Use setter
account.fullName = "Jane Smith";
console.log("After setting full name:");
console.log("First name:", account.firstName);
console.log("Last name:", account.lastName);
console.log("Full name:", account.fullName);

// Using defineProperty with getter/setter
let temperature = {
    _celsius: 25,  // Private convention (not truly private)
    
    get fahrenheit() {
        return (this._celsius * 9/5) + 32;
    },
    
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
};

Object.defineProperty(temperature, 'kelvin', {
    get() {
        return this._celsius + 273.15;
    },
    set(value) {
        this._celsius = value - 273.15;
    }
});

console.log("\n=== Temperature Converter ===");
console.log("Celsius:", temperature._celsius);
console.log("Fahrenheit:", temperature.fahrenheit);
console.log("Kelvin:", temperature.kelvin);

temperature.fahrenheit = 77;
console.log("\nAfter setting to 77°F:");
console.log("Celsius:", temperature._celsius);
console.log("Fahrenheit:", temperature.fahrenheit);

// Smart getters/setters for validation
let user2 = {
    get age() {
        return this._age;
    },
    
    set age(value) {
        if (value < 0) {
            console.log("Age cannot be negative!");
            return;
        }
        if (value > 150) {
            console.log("Age seems unrealistic!");
            return;
        }
        this._age = value;
    }
};

user2.age = 25;
console.log("\nUser2 age:", user2.age);
user2.age = -5;  // Will show error
user2.age = 200; // Will show error

// Read-only property using getter without setter
let constants = {
    get PI() {
        return 3.14159;
    },
    
    get E() {
        return 2.71828;
    }
};

console.log("\n=== Constants ===");
console.log("PI:", constants.PI);
console.log("E:", constants.E);
// constants.PI = 3; // Error in strict mode, silent failure otherwise

// Combined example
let product = {
    _price: 100,
    _discount: 0.1,
    
    get price() {
        return this._price;
    },
    
    set price(value) {
        if (value < 0) {
            throw new Error("Price cannot be negative");
        }
        this._price = value;
    },
    
    get finalPrice() {
        return this._price * (1 - this._discount);
    },
    
    get discount() {
        return this._discount * 100 + "%";
    },
    
    set discount(value) {
        if (value < 0 || value > 100) {
            throw new Error("Discount must be between 0 and 100");
        }
        this._discount = value / 100;
    }
};

console.log("\n=== Product with Discount ===");
console.log("Original price:", product.price);
console.log("Discount:", product.discount);
console.log("Final price:", product.finalPrice);

product.discount = 20;
console.log("\nAfter 20% discount:");
console.log("Discount:", product.discount);
console.log("Final price:", product.finalPrice);