let person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log("Full name:", person.getFullName());