try {
    let x = 10;
    let y = 0;
    let result = x / y;
    console.log("Result:", result);
    
    // This will cause error
    let data = null;
    console.log(data.name);
    
} catch (error) {
    console.log("Error caught!");
    console.log("Error type:", error.name);
    console.log("Error message:", error.message);
}

// Another example
function getUser(id) {
    if (id < 1) {
        throw new Error("Invalid ID");
    }
    return {id: id, name: "John"};
}

try {
    let user = getUser(-1);
    console.log("User:", user);
} catch (err) {
    console.log("Error:", err.message);
}