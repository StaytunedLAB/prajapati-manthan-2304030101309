function slow(x) {
    console.log("Called with", x);
    return x * 2;
}

function cachingDecorator(func) {
    let cache = new Map();
    
    return function(x) {
        if (cache.has(x)) {
            console.log("From cache:", cache.get(x));
            return cache.get(x);
        }
        
        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);
console.log("Decorated slow(2):", slow(2));
console.log("Decorated slow(2) again:", slow(2));

// Using apply
function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

let person = {name: "Alice"};
greet.apply(person, ["Hello", "!"]);