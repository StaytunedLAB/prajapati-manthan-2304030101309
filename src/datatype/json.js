let student = {
    name: "John",
    age: 21,
    courses: ["Math", "Science"],
    toJSON() {
        return {
            name: this.name,
            courses: this.courses
        };
    }
};

let jsonStr = JSON.stringify(student);
console.log("JSON string:", jsonStr);

let parsedObj = JSON.parse('{"name":"Alice","age":25}');
console.log("Parsed object:", parsedObj);