class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

class AgeError extends Error {
    constructor(message, age) {
        super(message);
        this.name = "AgeError";
        this.age = age;
    }
}

// Using custom error
function checkAge(age) {
    if (age < 0) {
        throw new AgeError("Age cannot be negative", age);
    }
    if (age > 120) {
        throw new AgeError("Age is too high", age);
    }
    console.log("Age is valid:", age);
}

try {
    checkAge(-5);
} catch (error) {
    if (error instanceof AgeError) {
        console.log("AgeError:", error.message);
        console.log("Invalid age was:", error.age);
    }
}

try {
    checkAge(150);
} catch (error) {
    console.log(error.name + ":", error.message);
}