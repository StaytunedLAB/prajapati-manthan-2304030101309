let multiply = (a, b) => a * b;
console.log("Arrow multiply:", multiply(4, 5));

let numbers = [1, 2, 3, 4];
let squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// More examples
let group = {
    title: "Our Group",
    students: ["John", "Alice", "Bob"],
    
    showList() {
        this.students.forEach(
            student => console.log(this.title + ": " + student)
        );
    }
};
group.showList();