function outer() {
    let outerVar = "I'm outside";
    
    function inner() {
        let innerVar = "I'm inside";
        console.log(outerVar); // Can access outer variable
        return innerVar;
    }
    
    return inner;
}

let closureFunc = outer();
console.log("Closure example:", closureFunc());