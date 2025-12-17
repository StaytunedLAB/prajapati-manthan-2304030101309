let numObj = {
    value: 10,
    toString() {
        return "Number: " + this.value;
    },
    valueOf() {
        return this.value;
    }
};

console.log("String:", String(numObj)); // "Number: 10"
console.log("Number:", Number(numObj)); // 10
console.log("Boolean:", Boolean(numObj)); // true