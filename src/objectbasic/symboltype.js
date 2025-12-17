let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("Symbols equal?", id1 === id2); // false

let user2 = {
    name: "Bob",
    [id1]: 123
};
console.log("Symbol key:", user2[id1]);
