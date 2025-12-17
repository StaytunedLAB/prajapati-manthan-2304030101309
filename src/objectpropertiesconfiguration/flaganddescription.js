let user = {
    name: "Alice"
};

// Get property descriptor
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log("Property descriptor:", descriptor);

// Modify property flags
Object.defineProperty(user, 'name', {
    writable: false,    // Cannot be changed
    enumerable: true,   // Will appear in loops
    configurable: false // Cannot be deleted or reconfigured
});

console.log("After making name non-writable:");
user.name = "Bob"; // This won't work (silent failure in non-strict mode)
console.log("Name is still:", user.name);

// Create new property with specific flags
Object.defineProperty(user, 'id', {
    value: 12345,
    writable: false,
    enumerable: false,   // Won't appear in for..in
    configurable: false
});

console.log("\nUser properties:");
for (let key in user) {
    console.log(key + ":", user[key]);
}
console.log("id exists but not enumerable:", user.id);

// Define multiple properties
Object.defineProperties(user, {
    email: {
        value: "alice@example.com",
        writable: true,
        enumerable: true,
        configurable: true
    },
    secret: {
        value: "hidden data",
        enumerable: false,
        configurable: true
    }
});

console.log("\nAll property descriptors:");
console.log(Object.getOwnPropertyDescriptors(user));